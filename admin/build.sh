#! /bin/bash 
###########################################
#
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
SITE=$baseDir/../dist
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $baseDir/../docfx_project
rm -rf $SITE/_site/*
# rm -rf obj
docfx build -o $SITE ./docfx.json
# config to generate pdfs
# https://dotnet.github.io/docfx/tutorial/docfx.exe_user_manual.html#24-generate-pdf-documentation-command-docfx-pdf
# docfx pdf -o $SITE