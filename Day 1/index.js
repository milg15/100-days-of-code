const initialState = `# Hello World 
## Thanks for being here! 
- I love cats 
- I love dogs 
- I love me

**This is a message from me** *To you*  
This is a
jump to next 
ine

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
> Block Quotes!
And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

[Follow me on instagram](https://www.instagram.com/thavcodes/)
### Look a cute doggie
![Doggie](https://rearfront.com/wp-content/uploads/2019/05/cute-shiba-inu.png)`;

function Header(props){
  const {text} = props;
  return(<header>
      <img src="https://i.ibb.co/0K1WNDW/pineapple.png" alt="Girl in a jacket" class="icon"/>
        <p>{text}</p>
        </header>
    )
}

function Editor(props){
  const {setValue, value} = props;
  
   return (<div 
class="container"> 
       <Header text={"Editor"}/><textarea value={value} class="container" id="editor" onChange={e=> setValue(e.target.value)}></textarea>
       </div>)
}

function Previewer(props){
  const {value} = props;
  
   return (<div 
class="container"> 
       <Header text={"Preview"}/>
       <div id="preview"  dangerouslySetInnerHTML={{__html:marked(value, {breaks: true})}}>
   </div>
   </div>)
}

function App(props){
  const [mkValue, setMkValue] = React.useState(initialState);
  
  return (
    <React.Fragment>  
      <Editor setValue={setMkValue} value={mkValue}/>
      <Previewer value={mkValue}/>
    </React.Fragment>
   )
}
 
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
 