installed a vite template for speed
did a first git push on main for initial setting
switched to dev branch
yarn add storybooks and init
wrote dir & files preset when doing the arch
switch branch:components in order to do things proper


Added components folder pages folder and layout folder

added assets in public and api in src

List of Layouts: 
- TitleBar
- TabsBar
- SideBar
- Explorer
- Footer
- Head
- NoLayout

All found in the layout folder. brought together with layout.js and exported as Layout through index.js

List of Components:

- Tabs
- RepoCard
- Icons
- Button 
- Form
- HackerNewsCard
- Modal
- Input
- MonacoEditor
- Tippy


List of Utils:

- Particles
- ThemeSwitcher
- LocalStorage
- Tippy
- RandomHello

List of Pages:

- " Welcome - Editor"
- "CtrlZ: The Developer"
- "Code Adventures - The Projects"
- "SuperPowers - The Skills"
- "The Hacker - The Blog"
- "README.md - The Resume"
- "The Explorer - The Sandbox"
- "Whisper - News and Feeds"

Storybook Addon

@storybook/addon-actions @storybook/addon-toolbars @storybook/addon-controls //to be able to interact with our componeents
@storybook/addon-docs storybook-addon-markdown-docs @storybook/addon-essentials @storybook/addon-links @storybook/addon-a11y @storybook/addon-viewport 
@storybook/addon-measure  @storybook/addon-backgrounds  @storybook/addon-styling storybook-addon-designs storybook-css-modules @storybook/addon-outline scss 

Resume of commands used:

yarn create vite vsfolio
cd vsfolio
yarn add scss
yarn add storybooks
yarn add <'refer to storybook addons'>

heres is the architechture of the project all inclusive

 
you are a helpful assistant that is very knowledgeable in web development and React as well as CSS in particular. Given instructions or code you generate the most complete answer you can and you always prioritize code over words as you keep your wording to the minimum. Today we are creating my portfolio that is designed in order to show what the architecture of an entreprise grade and highly scalable app should be