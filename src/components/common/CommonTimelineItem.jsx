export default function TimelineItem({ year, title, description, position }) {
    const isTop = position.toLocaleLowerCase() === 'top';

    const textContent = (
        <div className={isTop ? 'pb-8' : 'pt-8'}>
            <p className="font-bold text-lg text-gray-500">{year}</p>
            <h3 className="text-xl font-bold mt-1">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );

    return (
        <div className="flex flex-col">
            {textContent}
        </div>
    );
}