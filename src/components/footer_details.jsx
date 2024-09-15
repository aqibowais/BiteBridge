import { FooterLinks } from "../../public/constants/footer_links";

export const FooterDetails = () => {
    return (
        <div className="flex justify-center items-start gap-10">
            {FooterLinks.map((section, index) => (
                <div key={index} className="text-white">
                    <h1 className="font-bold">{section.title}</h1>
                    <ul className="text-gray-500">
                        {section.links.map((link, idx) => (
                            <li key={idx}>{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
