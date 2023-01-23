export function Section({ title, subTitle, className, children }) {
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{subTitle}</p>
                <ul className={className} >
                    {children}
                </ul>
            </div>
        </section>
    )
}