# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Font Variation Settings vs Weight](https://g.co/gemini/share/625694e0bd73) & [Variable fonts guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) - I used them to clear my doubts about importing a variable font with different styles. I ended up declaring two font weight for regular and italics. Then I would change the font-weight with the classes 'font-thin' and 'font-regular'.

- [width](https://tailwindcss.com/docs/width) - I customized the class that applies the max width to the container for the whole page. I would usually use a custom value, but this alternative is nice.

- [PX to REM converter](https://nekocalc.com/px-to-rem-converter) - I just use it instead of calculating it. It also has a useful table.

- [Detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files) - If we are using tailwind classes in a dynamic way, it is very important to add the complete so that the CSS is actually shipped.


- [Index type troubleshooting with Grok](https://grok.com/share/bGVnYWN5_e655014b-c511-4abf-80f3-0fc66ee299eb) - I did not know about index types. I had to create one for an object for the colors of the list elements in the start menu. 
```ts
  interface StringDictionary {
    [key: string]: string;
  }
```

- [Index Signatures](https://basarat.gitbook.io/typescript/type-system/index-signatures) - I had many doubts about index signatures from Grok's answer. This Documentation is great. I do not fully grasp the concept, but know I have some familiarity.

- [React Image Loading from JSON](https://grok.com/share/bGVnYWN5_f00cb14f-ae2f-4d9d-a7be-c8efbacb46d6) - I did not want to import each List image manually, I wanted the component to be dynamic if a new topic would be added to the app. Using Vite, Grok suggested to import it with `import.meta.glob`

- [Vite Features - Glob Import](https://vite.dev/guide/features#glob-import) - This the feature suggested by Grok. I think is pretty cool. I actually changed how all my svg were being imported. I struggled typing the object but it was done.

- [React - Passing JSX as children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) - I made the Option component more reusable, for the start menu and the questions. 

- [Dark mode](https://tailwindcss.com/docs/dark-mode) & [Grok conversation](https://grok.com/share/bGVnYWN5_74a61df4-e072-48bb-b9c7-6c86ef3db8df) - It was super useful to get the dark mode functionality.

- [TypeScript Event Types and Event Handling in React: A Complete Guide for Beginners](https://dev.to/nishanthan-k/typescript-event-types-and-event-handling-in-react-a-complete-guide-for-beginners-3cn0)

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
