//"document.write()" demo

let strValue1="javascript";
let strValue2="language";


//if want to print something in h4 font
let template=`
<h4>
     ${strValue1} ${strValue2}
</h4>
`;
document.write(template);//javascript language(in h4 font)

document.write(`${strValue1} ${strValue2}`);//javascript language(normal font)

//OR
template=`
    ${strValue1} ${strValue2}
`;
document.write(template);//javascript language(normal font)