export function ListItem({ url, imageUrl, alt }) {
    return (
        <li>
            <a 
                target="_blank"
                href={url}>
                <img src={imageUrl} alt={alt}/>
            </a>
        </li>
    )
}