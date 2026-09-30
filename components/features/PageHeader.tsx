type PageHeaderProps = {
    title: string;
}

export default function PageHeader({title}: PageHeaderProps) {
    return (
        <div className="h-[40vh] flex justify-center items-center text-4xl font-black border-b border-zinc-700 bg-black ">
            <div className="ring rounded-lg p-3 ring-red-500">
                {title}
            </div>
        </div>
    )
}