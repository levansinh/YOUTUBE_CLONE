function Helmet(props) {
    document.title= 'Youtube - ' + props.title
    return ( 
        <div className="">
            {props.children}
        </div>
     );
}

export default Helmet;