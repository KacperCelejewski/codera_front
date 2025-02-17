
function LiElement (props : {href: string, text: string}) {
    return (
        <li className="text-white">
        <a className = "hover:text-techGreen" href={props.href}>{props.text}</a>
        </li>
    )}

export default function Navbar() {
    const navItems = [
        
        {href: "/o-nas", text: "O nas"},
        {href: "/contact", text: "Kontakt"},
        {href: "/mentoring", text: "Mentoring"},
        {href: "/blog", text: "Blog"},
        {href: "/wiedza", text: "Wiedza"},
    ]
  return (
    <div>
      <nav>
        <ul className="flex justify-around p-5 bg-darkBlue">
            {navItems.map((item) =>
                <LiElement href={item
                .href} text={item.text} />
            )}
        </ul>
      </nav>
    </div>
  );
}


