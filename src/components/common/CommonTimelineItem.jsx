export default function CommonTimelineItem({ year, title, description, position, className }) {
    const isTop = position.toLocaleLowerCase() === 'top';

    const containerClasses = `relative pl-10 md:pl-0 ${className || ''}`;

    const textContainerClasses = isTop
        ? 'md:pb-8 flex-col  md:justify-end'
        : 'md:pt-8 flex-col  md:justify-start';

    return (
        <div className={containerClasses}>
            <div className="absolute top-2 left-3 w-4 h-4 bg-neuston-Amber-Darkest rounded-full -translate-x-1/2 md:hidden"></div>

            <div className={`flex ${textContainerClasses}`}>
                <p className="font-bold text-lg text-neuston-Amber-Darkest">{year}</p>
                <h4 className="text-xl font-bold mt-1">{title}</h4>
                <p className="mt-2 text-neuston-Amber-Darkest">{description}</p>
            </div>
        </div>
    );
}