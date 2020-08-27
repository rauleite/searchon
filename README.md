# searchon

CLI for developer friendly **Discussions Search** (Mac, Linux, Windows)

Have you ever noticed how annoying it is to tweak Google tech search results? Then type `searchon` from your terminal.

## Instalation

`npm install --global searchon`

### Binaries for envirounments without Nodejs

[linux](https://github.com/rauleite/searchon/releases/download/v1.0.0.0/searchon-linux)
[macos](https://github.com/rauleite/searchon/releases/download/v1.0.0.0/searchon-macos)
[win](https://github.com/rauleite/searchon/releases/download/v1.0.0.0/searchon-win.exe)

## Usage

### Interactive mode

`searchon`

![Simple Wizard](https://raw.githubusercontent.com/rauleite/assets/master/simple.gif)

### With Options

![With group option](https://raw.githubusercontent.com/rauleite/assets/master/group.gif)

![With group and term option](https://raw.githubusercontent.com/rauleite/assets/master/group_and_term.gif)

### Cache

All your options have been saved, to speed up next searches.

### One File Edit

Edit your site and groups preferences in a settings file:

`searchon --edit-cache`

![Store editing](https://raw.githubusercontent.com/rauleite/assets/master/cache.gif)

OR

`searchon --cache-path`

### Help

`searchon --help`

```bash
Usage: searchon [--options param1[,param2]] ["search terms"]

  CLI for developer friendly Discussions Search (Mac, Linux, Windows)

Options:
  -g, --group <group1,group2>  Avaible: sites,communities,blog
  -d, --defaults               search on all defaults groups and sites
  --edit-cache                 Open and edit cache file
  --cache-path                 shows the cache path
  --clean                      clean the cache file
  -v, --version                current version
  -h, --help                   display help for command

Examples:
Search wizard:
  $ searchon
Search based on the multiple groups:
  $ searchon -g myGroup,otherGroup "deno vs nodejs"
Tip: If you know what you re doing, you can create groups and sites by editing the cache file. (Warning: risk of corrupting it)
  $ searchon --cache-path
  $ searchon --edit-cache
```
