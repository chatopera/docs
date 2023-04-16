var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/main.ts
__export(exports, {
  default: () => CodeEditorShortcuts
});
var import_obsidian = __toModule(require("obsidian"));

// src/constants.ts
var CASE;
(function(CASE2) {
  CASE2["UPPER"] = "upper";
  CASE2["LOWER"] = "lower";
  CASE2["TITLE"] = "title";
})(CASE || (CASE = {}));
var LOWERCASE_ARTICLES = ["the", "a", "an"];
var DIRECTION;
(function(DIRECTION2) {
  DIRECTION2["FORWARD"] = "forward";
  DIRECTION2["BACKWARD"] = "backward";
})(DIRECTION || (DIRECTION = {}));
var MATCHING_BRACKETS = {
  "[": "]",
  "(": ")",
  "{": "}"
};
var MATCHING_QUOTES = {
  "'": "'",
  '"': '"',
  "`": "`"
};
var MATCHING_QUOTES_BRACKETS = __spreadValues(__spreadValues({}, MATCHING_QUOTES), MATCHING_BRACKETS);
var CODE_EDITOR;
(function(CODE_EDITOR2) {
  CODE_EDITOR2["SUBLIME"] = "sublime";
  CODE_EDITOR2["VSCODE"] = "vscode";
})(CODE_EDITOR || (CODE_EDITOR = {}));
var MODIFIER_KEYS = [
  "Control",
  "Shift",
  "Alt",
  "Meta",
  "CapsLock",
  "Fn"
];
var JOIN_LINE_TRIM_REGEX = /^\s*((-|\+|\*|\d+\.|>) )?/;

// src/utils.ts
var defaultMultipleSelectionOptions = { repeatSameLineActions: true };
var withMultipleSelections = (editor, callback, options = defaultMultipleSelectionOptions) => {
  const { cm } = editor;
  const selections = editor.listSelections();
  let selectionIndexesToProcess;
  let newSelections = [];
  if (!options.repeatSameLineActions) {
    const seenLines = [];
    selectionIndexesToProcess = selections.reduce((indexes, currSelection, currIndex) => {
      const currentLine = currSelection.head.line;
      if (!seenLines.includes(currentLine)) {
        seenLines.push(currentLine);
        indexes.push(currIndex);
      }
      return indexes;
    }, []);
  }
  const applyCallbackOnSelections = () => {
    for (let i = 0; i < selections.length; i++) {
      if (selectionIndexesToProcess && !selectionIndexesToProcess.includes(i)) {
        continue;
      }
      const selection = editor.listSelections()[i];
      if (selection) {
        const newSelection = callback(editor, selection, options.args);
        newSelections.push(newSelection);
      }
    }
    if (options.customSelectionHandler) {
      newSelections = options.customSelectionHandler(newSelections);
    }
    editor.setSelections(newSelections);
  };
  if (cm && cm.operation) {
    cm.operation(applyCallbackOnSelections);
  } else {
    console.debug("cm object not found, operations will not be buffered");
    applyCallbackOnSelections();
  }
};
var iterateCodeMirrorDivs = (callback) => {
  let codeMirrors;
  codeMirrors = document.querySelectorAll(".cm-content");
  if (codeMirrors.length === 0) {
    codeMirrors = document.querySelectorAll(".CodeMirror");
  }
  codeMirrors.forEach(callback);
};
var getLineStartPos = (line) => ({
  line,
  ch: 0
});
var getLineEndPos = (line, editor) => ({
  line,
  ch: editor.getLine(line).length
});
var getSelectionBoundaries = (selection) => {
  let { anchor: from, head: to } = selection;
  if (from.line > to.line) {
    [from, to] = [to, from];
  }
  if (from.line === to.line && from.ch > to.ch) {
    [from, to] = [to, from];
  }
  return { from, to };
};
var getLeadingWhitespace = (lineContent) => {
  const indentation = lineContent.match(/^\s+/);
  return indentation ? indentation[0] : "";
};
var isLetterCharacter = (char) => /\p{L}\p{M}*/u.test(char);
var wordRangeAtPos = (pos, lineContent) => {
  let start = pos.ch;
  let end = pos.ch;
  while (start > 0 && isLetterCharacter(lineContent.charAt(start - 1))) {
    start--;
  }
  while (end < lineContent.length && isLetterCharacter(lineContent.charAt(end))) {
    end++;
  }
  return {
    anchor: {
      line: pos.line,
      ch: start
    },
    head: {
      line: pos.line,
      ch: end
    }
  };
};
var findPosOfNextCharacter = ({
  editor,
  startPos,
  checkCharacter,
  searchDirection
}) => {
  let { line, ch } = startPos;
  let lineContent = editor.getLine(line);
  let matchFound = false;
  let matchedChar;
  if (searchDirection === DIRECTION.BACKWARD) {
    while (line >= 0) {
      const char = lineContent.charAt(Math.max(ch - 1, 0));
      matchFound = checkCharacter(char);
      if (matchFound) {
        matchedChar = char;
        break;
      }
      ch--;
      if (ch <= 0) {
        line--;
        if (line >= 0) {
          lineContent = editor.getLine(line);
          ch = lineContent.length;
        }
      }
    }
  } else {
    while (line < editor.lineCount()) {
      const char = lineContent.charAt(ch);
      matchFound = checkCharacter(char);
      if (matchFound) {
        matchedChar = char;
        break;
      }
      ch++;
      if (ch >= lineContent.length) {
        line++;
        lineContent = editor.getLine(line);
        ch = 0;
      }
    }
  }
  return matchFound ? {
    match: matchedChar,
    pos: {
      line,
      ch
    }
  } : null;
};
var hasSameSelectionContent = (editor, selections) => new Set(selections.map((selection) => {
  const { from, to } = getSelectionBoundaries(selection);
  return editor.getRange(from, to);
})).size === 1;
var getSearchText = ({
  editor,
  allSelections,
  autoExpand
}) => {
  const singleSearchText = hasSameSelectionContent(editor, allSelections);
  const firstSelection = allSelections[0];
  const { from, to } = getSelectionBoundaries(firstSelection);
  let searchText = editor.getRange(from, to);
  if (searchText.length === 0 && autoExpand) {
    const wordRange = wordRangeAtPos(from, editor.getLine(from.line));
    searchText = editor.getRange(wordRange.anchor, wordRange.head);
  }
  return {
    searchText,
    singleSearchText
  };
};
var escapeRegex = (input) => input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var withWordBoundaries = (input) => `(?<=\\W|^)${input}(?=\\W|$)`;
var findAllMatches = ({
  searchText,
  searchWithinWords,
  documentContent
}) => {
  const escapedSearchText = escapeRegex(searchText);
  const searchExpression = new RegExp(searchWithinWords ? escapedSearchText : withWordBoundaries(escapedSearchText), "g");
  return Array.from(documentContent.matchAll(searchExpression));
};
var findNextMatchPosition = ({
  editor,
  latestMatchPos,
  searchText,
  searchWithinWords,
  documentContent
}) => {
  const latestMatchOffset = editor.posToOffset(latestMatchPos);
  const matches = findAllMatches({
    searchText,
    searchWithinWords,
    documentContent
  });
  let nextMatch = null;
  for (const match of matches) {
    if (match.index > latestMatchOffset) {
      nextMatch = {
        anchor: editor.offsetToPos(match.index),
        head: editor.offsetToPos(match.index + searchText.length)
      };
      break;
    }
  }
  if (!nextMatch) {
    const selectionIndexes = editor.listSelections().map((selection) => {
      const { from } = getSelectionBoundaries(selection);
      return editor.posToOffset(from);
    });
    for (const match of matches) {
      if (!selectionIndexes.includes(match.index)) {
        nextMatch = {
          anchor: editor.offsetToPos(match.index),
          head: editor.offsetToPos(match.index + searchText.length)
        };
        break;
      }
    }
  }
  return nextMatch;
};
var findAllMatchPositions = ({
  editor,
  searchText,
  searchWithinWords,
  documentContent
}) => {
  const matches = findAllMatches({
    searchText,
    searchWithinWords,
    documentContent
  });
  const matchPositions = [];
  for (const match of matches) {
    matchPositions.push({
      anchor: editor.offsetToPos(match.index),
      head: editor.offsetToPos(match.index + searchText.length)
    });
  }
  return matchPositions;
};

// src/actions.ts
var insertLineAbove = (editor, selection) => {
  const { line } = selection.head;
  const startOfCurrentLine = getLineStartPos(line);
  editor.replaceRange("\n", startOfCurrentLine);
  return { anchor: startOfCurrentLine };
};
var insertLineBelow = (editor, selection) => {
  const { line } = selection.head;
  const endOfCurrentLine = getLineEndPos(line, editor);
  const indentation = getLeadingWhitespace(editor.getLine(line));
  editor.replaceRange("\n" + indentation, endOfCurrentLine);
  return { anchor: { line: line + 1, ch: indentation.length } };
};
var deleteSelectedLines = (editor, selection) => {
  const { from, to } = getSelectionBoundaries(selection);
  if (to.line === editor.lastLine()) {
    editor.replaceRange("", getLineEndPos(from.line - 1, editor), getLineEndPos(to.line, editor));
  } else {
    editor.replaceRange("", getLineStartPos(from.line), getLineStartPos(to.line + 1));
  }
  return { anchor: { line: from.line, ch: selection.head.ch } };
};
var deleteToStartOfLine = (editor, selection) => {
  const pos = selection.head;
  let startPos = getLineStartPos(pos.line);
  if (pos.line === 0 && pos.ch === 0) {
    return selection;
  }
  if (pos.line === startPos.line && pos.ch === startPos.ch) {
    startPos = getLineEndPos(pos.line - 1, editor);
  }
  editor.replaceRange("", startPos, pos);
  return {
    anchor: startPos
  };
};
var deleteToEndOfLine = (editor, selection) => {
  const pos = selection.head;
  let endPos = getLineEndPos(pos.line, editor);
  if (pos.line === endPos.line && pos.ch === endPos.ch) {
    endPos = getLineStartPos(pos.line + 1);
  }
  editor.replaceRange("", pos, endPos);
  return {
    anchor: pos
  };
};
var joinLines = (editor, selection) => {
  var _a, _b;
  const { from, to } = getSelectionBoundaries(selection);
  const { line } = from;
  let endOfCurrentLine = getLineEndPos(line, editor);
  const joinRangeLimit = Math.max(to.line - line, 1);
  const selectionLength = editor.posToOffset(to) - editor.posToOffset(from);
  let trimmedChars = "";
  for (let i = 0; i < joinRangeLimit; i++) {
    if (line === editor.lineCount() - 1) {
      break;
    }
    endOfCurrentLine = getLineEndPos(line, editor);
    const endOfNextLine = getLineEndPos(line + 1, editor);
    const contentsOfCurrentLine = editor.getLine(line);
    const contentsOfNextLine = editor.getLine(line + 1);
    const charsToTrim = (_a = contentsOfNextLine.match(JOIN_LINE_TRIM_REGEX)) != null ? _a : [];
    trimmedChars += (_b = charsToTrim[0]) != null ? _b : "";
    const newContentsOfNextLine = contentsOfNextLine.replace(JOIN_LINE_TRIM_REGEX, "");
    if (newContentsOfNextLine.length > 0 && contentsOfCurrentLine.charAt(endOfCurrentLine.ch - 1) !== " ") {
      editor.replaceRange(" " + newContentsOfNextLine, endOfCurrentLine, endOfNextLine);
    } else {
      editor.replaceRange(newContentsOfNextLine, endOfCurrentLine, endOfNextLine);
    }
  }
  if (selectionLength === 0) {
    return {
      anchor: endOfCurrentLine
    };
  }
  return {
    anchor: from,
    head: {
      line: from.line,
      ch: from.ch + selectionLength - trimmedChars.length
    }
  };
};
var copyLine = (editor, selection, direction) => {
  const { from, to } = getSelectionBoundaries(selection);
  const fromLineStart = getLineStartPos(from.line);
  const toLineEnd = getLineEndPos(to.line, editor);
  const contentsOfSelectedLines = editor.getRange(fromLineStart, toLineEnd);
  if (direction === "up") {
    editor.replaceRange("\n" + contentsOfSelectedLines, toLineEnd);
    return selection;
  } else {
    editor.replaceRange(contentsOfSelectedLines + "\n", fromLineStart);
    const linesSelected = to.line - from.line + 1;
    return {
      anchor: { line: to.line + 1, ch: from.ch },
      head: { line: to.line + linesSelected, ch: to.ch }
    };
  }
};
var isManualSelection = true;
var setIsManualSelection = (value) => {
  isManualSelection = value;
};
var isProgrammaticSelectionChange = false;
var setIsProgrammaticSelectionChange = (value) => {
  isProgrammaticSelectionChange = value;
};
var selectWordOrNextOccurrence = (editor) => {
  setIsProgrammaticSelectionChange(true);
  const allSelections = editor.listSelections();
  const { searchText, singleSearchText } = getSearchText({
    editor,
    allSelections,
    autoExpand: false
  });
  if (searchText.length > 0 && singleSearchText) {
    const { from: latestMatchPos } = getSelectionBoundaries(allSelections[allSelections.length - 1]);
    const nextMatch = findNextMatchPosition({
      editor,
      latestMatchPos,
      searchText,
      searchWithinWords: isManualSelection,
      documentContent: editor.getValue()
    });
    const newSelections = nextMatch ? allSelections.concat(nextMatch) : allSelections;
    editor.setSelections(newSelections);
    const lastSelection = newSelections[newSelections.length - 1];
    editor.scrollIntoView(getSelectionBoundaries(lastSelection));
  } else {
    const newSelections = [];
    for (const selection of allSelections) {
      const { from, to } = getSelectionBoundaries(selection);
      if (from.line !== to.line || from.ch !== to.ch) {
        newSelections.push(selection);
      } else {
        newSelections.push(wordRangeAtPos(from, editor.getLine(from.line)));
        setIsManualSelection(false);
      }
    }
    editor.setSelections(newSelections);
  }
};
var selectAllOccurrences = (editor) => {
  const allSelections = editor.listSelections();
  const { searchText, singleSearchText } = getSearchText({
    editor,
    allSelections,
    autoExpand: true
  });
  if (!singleSearchText) {
    return;
  }
  const matches = findAllMatchPositions({
    editor,
    searchText,
    searchWithinWords: true,
    documentContent: editor.getValue()
  });
  editor.setSelections(matches);
};
var selectLine = (_editor, selection) => {
  const { from, to } = getSelectionBoundaries(selection);
  const startOfCurrentLine = getLineStartPos(from.line);
  const startOfNextLine = getLineStartPos(to.line + 1);
  return { anchor: startOfCurrentLine, head: startOfNextLine };
};
var addCursorsToSelectionEnds = (editor, emulate = CODE_EDITOR.VSCODE) => {
  if (editor.listSelections().length !== 1) {
    return;
  }
  const selection = editor.listSelections()[0];
  const { from, to } = getSelectionBoundaries(selection);
  const newSelections = [];
  for (let line = from.line; line <= to.line; line++) {
    const head = line === to.line ? to : getLineEndPos(line, editor);
    let anchor;
    if (emulate === CODE_EDITOR.VSCODE) {
      anchor = head;
    } else {
      anchor = line === from.line ? from : getLineStartPos(line);
    }
    newSelections.push({
      anchor,
      head
    });
  }
  editor.setSelections(newSelections);
};
var goToLineBoundary = (editor, selection, boundary) => {
  const { from, to } = getSelectionBoundaries(selection);
  if (boundary === "start") {
    return { anchor: getLineStartPos(from.line) };
  } else {
    return { anchor: getLineEndPos(to.line, editor) };
  }
};
var navigateLine = (editor, selection, direction) => {
  const pos = selection.head;
  let line;
  if (direction === "up") {
    line = Math.max(pos.line - 1, 0);
  } else {
    line = Math.min(pos.line + 1, editor.lineCount() - 1);
  }
  const endOfLine = getLineEndPos(line, editor);
  const ch = Math.min(pos.ch, endOfLine.ch);
  return { anchor: { line, ch } };
};
var moveCursor = (editor, selection, direction) => {
  const { line, ch } = selection.head;
  const movement = direction === DIRECTION.BACKWARD ? -1 : 1;
  const lineLength = editor.getLine(line).length;
  const newPos = { line, ch: ch + movement };
  if (newPos.ch < 0 && newPos.line === 0) {
    newPos.ch = ch;
  } else if (newPos.ch < 0) {
    newPos.line = Math.max(newPos.line - 1, 0);
    newPos.ch = editor.getLine(newPos.line).length;
  } else if (newPos.ch > lineLength) {
    newPos.line += 1;
    newPos.ch = 0;
  }
  return { anchor: newPos };
};
var transformCase = (editor, selection, caseType) => {
  let { from, to } = getSelectionBoundaries(selection);
  let selectedText = editor.getRange(from, to);
  if (selectedText.length === 0) {
    const pos = selection.head;
    const { anchor, head } = wordRangeAtPos(pos, editor.getLine(pos.line));
    [from, to] = [anchor, head];
    selectedText = editor.getRange(anchor, head);
  }
  if (caseType === CASE.TITLE) {
    editor.replaceRange(selectedText.split(/(\s+)/).map((word, index, allWords) => {
      if (index > 0 && index < allWords.length - 1 && LOWERCASE_ARTICLES.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(""), from, to);
  } else {
    editor.replaceRange(caseType === CASE.UPPER ? selectedText.toUpperCase() : selectedText.toLowerCase(), from, to);
  }
  return selection;
};
var expandSelection = ({
  editor,
  selection,
  openingCharacterCheck,
  matchingCharacterMap
}) => {
  let { anchor, head } = selection;
  if (anchor.line >= head.line && anchor.ch > anchor.ch) {
    [anchor, head] = [head, anchor];
  }
  const newAnchor = findPosOfNextCharacter({
    editor,
    startPos: anchor,
    checkCharacter: openingCharacterCheck,
    searchDirection: DIRECTION.BACKWARD
  });
  if (!newAnchor) {
    return selection;
  }
  const newHead = findPosOfNextCharacter({
    editor,
    startPos: head,
    checkCharacter: (char) => char === matchingCharacterMap[newAnchor.match],
    searchDirection: DIRECTION.FORWARD
  });
  if (!newHead) {
    return selection;
  }
  return { anchor: newAnchor.pos, head: newHead.pos };
};
var expandSelectionToBrackets = (editor, selection) => expandSelection({
  editor,
  selection,
  openingCharacterCheck: (char) => /[([{]/.test(char),
  matchingCharacterMap: MATCHING_BRACKETS
});
var expandSelectionToQuotes = (editor, selection) => expandSelection({
  editor,
  selection,
  openingCharacterCheck: (char) => /['"`]/.test(char),
  matchingCharacterMap: MATCHING_QUOTES
});
var expandSelectionToQuotesOrBrackets = (editor) => {
  const selections = editor.listSelections();
  const newSelection = expandSelection({
    editor,
    selection: selections[0],
    openingCharacterCheck: (char) => /['"`([{]/.test(char),
    matchingCharacterMap: MATCHING_QUOTES_BRACKETS
  });
  editor.setSelections([...selections, newSelection]);
};
var goToHeading = (app, editor, boundary) => {
  const file = app.metadataCache.getFileCache(app.workspace.getActiveFile());
  if (!file.headings || file.headings.length === 0) {
    return;
  }
  const { line } = editor.getCursor("from");
  let prevHeadingLine = 0;
  let nextHeadingLine = editor.lastLine();
  file.headings.forEach(({ position }) => {
    const { end: headingPos } = position;
    if (line > headingPos.line && headingPos.line > prevHeadingLine) {
      prevHeadingLine = headingPos.line;
    }
    if (line < headingPos.line && headingPos.line < nextHeadingLine) {
      nextHeadingLine = headingPos.line;
    }
  });
  editor.setSelection(boundary === "prev" ? getLineEndPos(prevHeadingLine, editor) : getLineEndPos(nextHeadingLine, editor));
};

// src/custom-selection-handlers.ts
var insertLineBelowHandler = (selections) => {
  const seenLines = [];
  let lineIncrement = 0;
  let processedPos;
  return selections.reduce((processed, currentPos) => {
    const currentLine = currentPos.anchor.line;
    if (!seenLines.includes(currentLine)) {
      seenLines.push(currentLine);
      lineIncrement = 0;
      processedPos = currentPos;
    } else {
      lineIncrement++;
      processedPos = {
        anchor: {
          line: currentLine + lineIncrement,
          ch: currentPos.anchor.ch
        }
      };
    }
    processed.push(processedPos);
    return processed;
  }, []);
};

// src/main.ts
var CodeEditorShortcuts = class extends import_obsidian.Plugin {
  onload() {
    this.addCommand({
      id: "insertLineAbove",
      name: "Insert line above",
      hotkeys: [
        {
          modifiers: ["Mod", "Shift"],
          key: "Enter"
        }
      ],
      editorCallback: (editor) => withMultipleSelections(editor, insertLineAbove)
    });
    this.addCommand({
      id: "insertLineBelow",
      name: "Insert line below",
      hotkeys: [
        {
          modifiers: ["Mod"],
          key: "Enter"
        }
      ],
      editorCallback: (editor) => withMultipleSelections(editor, insertLineBelow, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        customSelectionHandler: insertLineBelowHandler
      }))
    });
    this.addCommand({
      id: "deleteLine",
      name: "Delete line",
      hotkeys: [
        {
          modifiers: ["Mod", "Shift"],
          key: "K"
        }
      ],
      editorCallback: (editor) => withMultipleSelections(editor, deleteSelectedLines)
    });
    this.addCommand({
      id: "deleteToStartOfLine",
      name: "Delete to start of line",
      editorCallback: (editor) => withMultipleSelections(editor, deleteToStartOfLine)
    });
    this.addCommand({
      id: "deleteToEndOfLine",
      name: "Delete to end of line",
      editorCallback: (editor) => withMultipleSelections(editor, deleteToEndOfLine)
    });
    this.addCommand({
      id: "joinLines",
      name: "Join lines",
      hotkeys: [
        {
          modifiers: ["Mod"],
          key: "J"
        }
      ],
      editorCallback: (editor) => withMultipleSelections(editor, joinLines, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        repeatSameLineActions: false
      }))
    });
    this.addCommand({
      id: "duplicateLine",
      name: "Duplicate line",
      hotkeys: [
        {
          modifiers: ["Mod", "Shift"],
          key: "D"
        }
      ],
      editorCallback: (editor) => withMultipleSelections(editor, copyLine, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: "down"
      }))
    });
    this.addCommand({
      id: "copyLineUp",
      name: "Copy line up",
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "ArrowUp"
        }
      ],
      editorCallback: (editor) => withMultipleSelections(editor, copyLine, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: "up"
      }))
    });
    this.addCommand({
      id: "copyLineDown",
      name: "Copy line down",
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "ArrowDown"
        }
      ],
      editorCallback: (editor) => withMultipleSelections(editor, copyLine, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: "down"
      }))
    });
    this.addCommand({
      id: "selectWordOrNextOccurrence",
      name: "Select word or next occurrence",
      hotkeys: [
        {
          modifiers: ["Mod"],
          key: "D"
        }
      ],
      editorCallback: (editor) => selectWordOrNextOccurrence(editor)
    });
    this.addCommand({
      id: "selectAllOccurrences",
      name: "Select all occurrences",
      hotkeys: [
        {
          modifiers: ["Mod", "Shift"],
          key: "L"
        }
      ],
      editorCallback: (editor) => selectAllOccurrences(editor)
    });
    this.addCommand({
      id: "selectLine",
      name: "Select line",
      hotkeys: [
        {
          modifiers: ["Mod"],
          key: "L"
        }
      ],
      editorCallback: (editor) => withMultipleSelections(editor, selectLine)
    });
    this.addCommand({
      id: "addCursorsToSelectionEnds",
      name: "Add cursors to selection ends",
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "I"
        }
      ],
      editorCallback: (editor) => addCursorsToSelectionEnds(editor)
    });
    this.addCommand({
      id: "goToLineStart",
      name: "Go to start of line",
      editorCallback: (editor) => withMultipleSelections(editor, goToLineBoundary, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: "start"
      }))
    });
    this.addCommand({
      id: "goToLineEnd",
      name: "Go to end of line",
      editorCallback: (editor) => withMultipleSelections(editor, goToLineBoundary, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: "end"
      }))
    });
    this.addCommand({
      id: "goToNextLine",
      name: "Go to next line",
      editorCallback: (editor) => withMultipleSelections(editor, navigateLine, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: "down"
      }))
    });
    this.addCommand({
      id: "goToPrevLine",
      name: "Go to previous line",
      editorCallback: (editor) => withMultipleSelections(editor, navigateLine, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: "up"
      }))
    });
    this.addCommand({
      id: "goToNextChar",
      name: "Move cursor forward",
      editorCallback: (editor) => withMultipleSelections(editor, moveCursor, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: DIRECTION.FORWARD
      }))
    });
    this.addCommand({
      id: "goToPrevChar",
      name: "Move cursor backward",
      editorCallback: (editor) => withMultipleSelections(editor, moveCursor, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: DIRECTION.BACKWARD
      }))
    });
    this.addCommand({
      id: "transformToUppercase",
      name: "Transform selection to uppercase",
      editorCallback: (editor) => withMultipleSelections(editor, transformCase, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: CASE.UPPER
      }))
    });
    this.addCommand({
      id: "transformToLowercase",
      name: "Transform selection to lowercase",
      editorCallback: (editor) => withMultipleSelections(editor, transformCase, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: CASE.LOWER
      }))
    });
    this.addCommand({
      id: "transformToTitlecase",
      name: "Transform selection to title case",
      editorCallback: (editor) => withMultipleSelections(editor, transformCase, __spreadProps(__spreadValues({}, defaultMultipleSelectionOptions), {
        args: CASE.TITLE
      }))
    });
    this.addCommand({
      id: "expandSelectionToBrackets",
      name: "Expand selection to brackets",
      editorCallback: (editor) => withMultipleSelections(editor, expandSelectionToBrackets)
    });
    this.addCommand({
      id: "expandSelectionToQuotes",
      name: "Expand selection to quotes",
      editorCallback: (editor) => withMultipleSelections(editor, expandSelectionToQuotes)
    });
    this.addCommand({
      id: "expandSelectionToQuotesOrBrackets",
      name: "Expand selection to quotes or brackets",
      editorCallback: (editor) => expandSelectionToQuotesOrBrackets(editor)
    });
    this.addCommand({
      id: "goToNextHeading",
      name: "Go to next heading",
      editorCallback: (editor) => goToHeading(this.app, editor, "next")
    });
    this.addCommand({
      id: "goToPrevHeading",
      name: "Go to previous heading",
      editorCallback: (editor) => goToHeading(this.app, editor, "prev")
    });
    this.registerSelectionChangeListeners();
  }
  registerSelectionChangeListeners() {
    this.app.workspace.onLayoutReady(() => {
      const handleSelectionChange = (evt) => {
        if (evt instanceof KeyboardEvent && MODIFIER_KEYS.includes(evt.key)) {
          return;
        }
        if (!isProgrammaticSelectionChange) {
          setIsManualSelection(true);
        }
        setIsProgrammaticSelectionChange(false);
      };
      iterateCodeMirrorDivs((cm) => {
        this.registerDomEvent(cm, "keydown", handleSelectionChange);
        this.registerDomEvent(cm, "click", handleSelectionChange);
        this.registerDomEvent(cm, "dblclick", handleSelectionChange);
      });
    });
  }
};
