import BackButton from "../Components/BackButton";
import Container from "../Components/Container";


import { SiReact, SiTailwindcss, SiFramer, SiSentry, SiSpotify, SiRedux } from "react-icons/si"

export default function About() {
    return (
        <Container>
            <BackButton />

            <div className="py-5 clear-both">
                <h1 className="font-bold text-2xl" >
                    About StereoSpark
                </h1>
                <p className="dark:text-white/60 text-black/60">
                    More information and common questions about StereoSpark
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <div className="section section-card flex flex-col">

                    <div className="flex-1">

                        <h2>
                            Found a bug or want a feature? 🐛🎁*
                        </h2>
                        <p className="text-lg">
                            Submit an issue <a href="https://github.com/UzziahOsia/StereoSpark/issues" className="underline">here</a>.
                        </p>
                    </div>

                    <p className="text-sm mt-5">
                        * Please state clearly how you reproduced the issue or which aspect of the application you want to request new features for.
                    </p>
                </div>

                <div className="section section-card flex flex-col">

                    <div className="flex-1">

                        <h2>
                            Try out new features ✨*
                        </h2>
                        <p className="text-lg">
                            You can try out cutting-edge features <a href="https://next--StereoSpark.netlify.app/" className="underline">here</a>.
                        </p>
                    </div>

                    <p className="text-sm mt-5">
                        * Note that features from the beta branch might not make its way into the public release and features are subject to change.
                    </p>
                </div>
            </div>

            <div className="section spacing">
                <h2>
                    Is StereoSpark open-source?
                </h2>
                <p>
                    Yes, StereoSpark is open-source and it's Github project can be found <a href="https://github.com/UzziahOsia/StereoSpark.git" className="underline">here</a> and the <strong>next</strong> version of StereoSpark can be found <a href="https://github.com/UzziahOsia/StereoSpark/tree/next" className="underline">here</a>.
                </p>
            </div>

            <div className="section spacing">
                <h2>
                    Why is StereoSpark created?
                </h2>
                <p>
                StereoSpark is created to find ways to discover songs similar to the ones you already like.
                </p>
            </div>

            <div className="section spacing">
                <h2>
                    What is StereoSpark built on?
                </h2>

                <span className="icons flex text-2xl gap-2 my-4">
                    <SiReact />
                    <SiRedux />
                    <SiTailwindcss />
                    <SiSpotify />
                    <SiFramer />
                    <SiSentry />
                </span>
                <p>
                StereoSpark is built on React, Redux, Tailwind CSS, Spotify API (and uses the recommendations algorithms from them), Framer motion for animations and Sentry for error reporting in production.
                </p>
            </div>

            <div className="section spacing">
                <h2>
                    Does StereoSpark collect data?
                </h2>
                <p>
                StereoSpark does not collect any data. StereoSpark only uses your Spotify account to search for tracks, get your playlists, liked songs, recently played and currently playing track and create or modify existing playlists.
                </p>
            </div>

        </Container>
    )
}