# javaScript Regular Expression
>**regEx:** used to make validate on string by using pattern.

## regular expression in js 
regular expression split into two parta  `pattern` + `flag`, 
### ways of making **regEx** 
- implicite way `var regEx= /pattern flag[i, g, m]/`==>> `var regex= /j.*t/igm`
- explicite way `var regEx= new RegExp(pattern ,flag)` ==>> `var regex= new RegExp("j.t*", "i") `

### RegExp Methods 
- `test()` return true or false 
- `exec()` return first matched string
- `replace(pattern, string)` replace string wich faced pattern with new string 
-  `search()` position for first match
- `match()` return array of matches
### RegExp Patterns and Flags
- `.` any character, degit, etc ..
- `^` start with
- `$` end with
- `{}` range 'number of charcacters '
- `[]` range of character
- `()` group
- `i` ignore case senstive
- `g` global
- `m` multi lines
- `\s` space
- `+` at least one
- `*` zero or more
- `|` or
- `\0` null character
- `\d` degits