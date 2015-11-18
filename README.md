# Xamarin Bug Annotations

GitHub Pages automatically runs Jekyll after each commit in this repository and outputs the final static content to the corresponding web site:  
<http://www.xambugs.com/>


## Steps to add a bug

1. Either follow the steps on the "[Bug Entry Helper](http://www.xambugs.com/bug_helper.html)" page to copy information from a bug in Bugzilla, or copy and paste the contents of [`_template.md`](https://raw.githubusercontent.com/brendanzagaeski/bug-annotations/gh-pages/_bugs/_template.md) into a new file under the "[_bugs/](https://github.com/brendanzagaeski/bug-annotations/tree/gh-pages/_bugs)" folder. If copying a bug from Bugzilla, make sure to name the new file carefully with the correct bug number. You can also create two other kinds of issues that do _not_ necessarily match existing bugs in Bugzilla: a "Known Issue" or and "Intentional Change". To create one of these, start the file name with either "KI" or "IC", and then append 5 digits, like "KI00002.md". Each new "KI" or "IC" page should increment the 5-digit number by 1.

2. Follow the descriptions in the comments in `_template.md` to fill out the various bug fields by copy-pasting from Bugzilla or creating your own new annotations. Most of the fields are optional (in fact even if the file only contains the 2 outer "---" lines, the bug number will still appear in the bug list), but the more information the better, especially to help with filtering.
