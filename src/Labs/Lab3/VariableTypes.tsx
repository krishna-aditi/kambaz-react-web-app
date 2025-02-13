export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    return(
        <div id="wd-variable-types">
            <h4>Variables Types</h4>
            numberVariable = { numberVariable }
            <br/>
            floatingPointNumber = { floatingPointNumber }
            <br/>
            stringVariable = { stringVariable }
            <br/>
            booleanVariable = { booleanVariable + "" }  {/*To convert the boolean variable into a string type before it could render in the browser.*/}
            <br/>
            isNumber = { isNumber }
            <br/>
            isString = { isString }
            <br/>
            isBoolean = { isBoolean }
            <hr/>
        </div>
    );
}
  