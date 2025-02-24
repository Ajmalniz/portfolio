export default function Contact() {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl py-12">
            <h1 className="text-4xl font-bold text-center mb-8">
                Let&apos;s Connect
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex justify-center w-full">
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLScumaz1NCIHZduBr1eBr82MZc9c-YzHKwGqqCXtRKYgaB4hcQ/viewform?embedded=true" 
                    className="w-full max-w-2xl h-[820px] md:h-[750px]"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    )
}