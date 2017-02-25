# Preparator3000
This tool administers problems that check student knowledge about CS fundamentals. Progress is reported to Outcomes coaches.

## For students
### install

1. Fork and clone down hackreactor/preparator3000
2. npm install
3. set your environmental variables:
```
    GITHUB_HANDLE=YOUR_GITHUB_HANDLE
    HR_NAME=YOUR_NAME
    HR_EMAIL=YOUR_EMAIL
    HR_COHORT=CURRENT_SENIOR_COHORT_#_ON_YOUR_FLOOR
```
4. run npm test
5. pass the failing test (will only show you the next test after you pass the previous one)
6. pass the next failing test...
7. etc...

- Attempt these problems without using the internet first. It is for your own good.
- Do not run the test until you are confident about your answer.

### to run the tests
`npm test`

## How to Contribute
We're looking for problems that test students' knowledege about fundamental concepts ("building blocks"). The problems should be fairly short -- these are not full, complex interview problems, this is for reviewing building blocks.

- Write your problem. It's a good idea to spilt the prompt's code from the test suite, unless it's something trivial like the Javascript/warmup problems. For reporting purposes, we need to create nested descibe blocks. start with the category, then difficulty, then description of the test suite. see Javascript/warmup/string_methods.test.js as an example.
- Put it in a directory by category and how long it might take. "Warmups" should take a few minutes, where "normal" problems shouldn't take more than 30 minutes.
- Add your test suite to `problems/manifest.js`. Ordering is thematic. Sometimes one problem will build up to another. Warmups will come before "Normal" difficulty prompts.
- Commit, Rebase off of upstream, make a Pull Request.
