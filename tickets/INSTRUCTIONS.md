## General

We don't want to test your speed. We want to see your skills and ways of solving certain problems. Our main goal is to
find out how you work and if it could match our standards. Block a couple of hours (2-3 max.) and resolve as many  
tickets (found in `tickets/`) as you can. We do not care about the quantity of resolved tickets. We only care about  
the quality of your work. Whenever you stumble upon **bugs** or **warnings** – resolve them. If you find code, that  
you think can be refactored to comply with the DRY principle, feel free to refactor it. Commit whenever you like but  
please use the conventions from the following section.

## Conventions to use

### Git Workflow

We chose and adapted a good way to provide a clear documentation of our work. The way that both links GitLab and Jira
together and also builds a solid history of the changes that can be back-traced.

#### Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.  
Format: `<type>(<scope>): <subject>`  
`<scope>` is optional

#### Example

```
feat: add hat wobble
^--^ ^------------^
| |
| +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

#### More Examples:

`feat`: (new feature for the user, not a new feature for build script)  
`fix`: (bug fix for the user, not a fix to a build script)  
`docs`: (changes to the documentation)  
`style`: (formatting, missing semi colons, etc; no production code change)  
`refactor`: (refactoring production code, eg. renaming a variable)  
`test`: (adding missing tests, refactoring tests; no production code change)  
`chore`: (updating grunt tasks etc; no production code change)

**In your case, if you are working on a ticket, use the ticket number as scope.**
