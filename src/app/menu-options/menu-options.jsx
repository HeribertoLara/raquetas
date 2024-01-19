const MenuOptions = (props) => {

    const menuOptions = [
        {
            id:1,
            title: "Inicio",
            url:"#"
        },
        {
            id:2,
            title: "Acerca de Nosotros",
            url:"#"
        },
        {
            id:3,
            title: "Historia",
            url:"#"
        },
        {
            id:4,
            title: "Contacto",
            url:"#"
        },
    ]

    return ( 
        <ul className={props.class}>
            {menuOptions.map(option => (
                <li key={option.id}>
                    <a href={option.url}>
                        {option.title}
                    </a>
                </li>
            ))}
        </ul>
     );
}
 
export default MenuOptions;