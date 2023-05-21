// Styles
import './Post.scss'


export default function Post() {

    return (
        <article className="w-full px-20 my-10">
            <img src="https://techcrunch.com/wp-content/uploads/2023/02/this-week-in-apps-splash-2023.webp?w=1390&crop=1" />
            <div className="mt-4">
                <h2 className="font-bold text-3xl">
                    This Week in Apps: ChatGPT comes to iPhone, Bing AI efforts expand, Instagram’s Twitter clone
                </h2>
                <p className="my-2 text-xl">
                    Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy.
                </p>
            </div>
        </article>
    )
}