/* This  utility allows me to create styled components from a single function called create. It takes an HTML ElementType,Tailwind utility classes and an optional object containing props
 */
import React,{Attributes,ClassAttributes,ElementType,FunctionComponentElement,ReactElement} from 'react';
import classNames from 'classnames';


function create<P extends Record<string, unknown>>(type: ElementType,
    ...className:string[]):(props?:(Attributes & P) | null) =>FunctionComponentElement<P>;

function create<T extends keyof JSX.IntrinsicElements,
P extends JSX.IntrinsicElements[T]>(
    type: keyof JSX.IntrinsicElements,
    ...className:string[]
):(props?:(ClassAttributes<T> & P)| null)=> ReactElement<P,T>;

function create<P extends Record<string,unknown>>(
    type:ElementType | keyof JSX.IntrinsicElements,...className:string[]):(
        props?:(Attributes & P & {className?:string}) | null,
    )=> ReactElement<P> {
        return function Classed(props){
            return React.createElement(type,{...props,className:classNames(props?.className,...className)})

        }
    };
    export default create;


    /* Example usage */

    