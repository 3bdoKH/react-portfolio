import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './uses.css'
function Uses() {
    return (
        <div className="container">
            <Header></Header>
            <div className="main-uses">
                <div className="description">
                    <h1>Software I use, gadgets I love, and other things I recommend.</h1>
                    <p>I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.</p>
                </div>
                <section>
                    <h2>Workstation</h2>
                    <div>
                        <article>
                            <h2>
                                16” MacBook Pro, M1 Max, 64GB RAM (2021)</h2>
                            <p>I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.</p>
                        </article>
                        <article>
                            <h2>Apple Pro Display XDR (Standard Glass)</h2>
                            <p>The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.</p>
                        </article>
                        <article>
                            <h2>IBM Model M SSK Industrial Keyboard</h2>
                            <p>Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.</p>
                        </article>
                        <article>
                            <h2>Apple Magic Trackpad</h2>
                            <p>Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.
                            </p>
                        </article>
                        <article>
                            <h2>Herman Miller Aeron Chair</h2>
                            <p>If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.</p>
                        </article>
                    </div>
                </section>
                <section>
                    <h2>Development tools</h2>
                    <div>
                        <article>
                            <h2>Sublime Text 4</h2>
                            <p>I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.</p>
                        </article>
                        <article>
                            <h2>iTerm2</h2>
                            <p>I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.</p>
                        </article>
                        <article>
                            <h2>TablePlus
                            </h2>
                            <p>Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.</p>
                        </article>
                    </div>
                </section>
                <section>
                    <h2>Design</h2>
                    <div>
                        <article>
                            <h2>Figma</h2>
                            <p>We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.</p>
                        </article>
                    </div>
                </section>
                <section>
                    <h2>Productivity</h2>
                    <div>
                        <article>
                            <h2>
                                Alfred</h2>
                            <p>It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.

                            </p>
                        </article>
                        <article>
                            <h2>Reflect</h2>
                            <p>Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.

                            </p>
                        </article>
                        <article>
                            <h2>SavvyCal
                            </h2>
                            <p>Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.

                            </p>
                        </article>
                        <article>
                            <h2>Focus</h2>
                            <p>Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.

                            </p>
                        </article>
                    </div>
                </section>
            </div>
            <div className="divider">

            </div>
            <Footer></Footer>
        </div>
    )
}
export default Uses