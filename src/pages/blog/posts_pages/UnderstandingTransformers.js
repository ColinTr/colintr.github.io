import React from "react";
import ReactGA from "react-ga4";
import {DiscussionEmbed} from "disqus-react";
import {Col, Container, Row} from "react-bootstrap";
import useChangeDocumentTitle from "../../../utils/ChangeDocumentTitle";

ReactGA.initialize("G-R8XSGWP0YR");

const UnderstandingTransformers = () => {
    useChangeDocumentTitle("Colin | Understanding Transformers");
    ReactGA.send({ hitType: "pageview", page: "/#/blog/understanding_transformers", title: "Colin | Understanding Transformers" });

    // Scroll to the top of the component when it is rendered
    window.scrollTo(0, 0)

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh", textAlign: "justify"}}>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <div style={{color: "#00000099"}}>
                        <a rel="noreferrer" href="/" id="skill_link">Home</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog" id="skill_link">Blog posts</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog/understanding_transformers" id="skill_link">Understanding Transformers</a>
                    </div>

                    <Row className="py-3">
                        <Col className="col-auto" style={{ flexGrow: 1 }}>
                            <h1>Understanding Transformers</h1>
                        </Col>
                        <Col className="d-flex align-items-center col-auto">
                            <p id="education_p_2" className="my-1">Written in August 2024</p>
                        </Col>
                    </Row>

                    <h3 className="py-0">1. Motivation</h3>

                    The transformer architecture is the core idea behind the recent success of natural language processing.
                    Its potential was revealed in 2018 when Google released <a rel="noreferrer" target="_blank" href="https://arxiv.org/abs/1810.04805">BERT</a>, which broke records on several NLP benchmarks and outperformed other state-of-the-art models that relied on the LSTM architecture such as <a rel="noreferrer" target="_blank" href="https://arxiv.org/abs/1802.05365">ELMo</a>.
                    Today, transformers are used in a wide range of applications. Some examples include:
                    <ul>
                        <li className="pt-2">
                            <b>Voice-to-text:</b> Models like Meta's <a rel="noreferrer" target="_blank" href="https://ai.meta.com/blog/wav2vec-20-learning-the-structure-of-speech-from-raw-audio/">Wav2vec 2.0</a> and OpenAi's <a rel="noreferrer" target="_blank" href="https://openai.com/index/whisper/">Whisper</a> can convert spoken language into written text with high accuracy.
                            These models use transformers to capture the temporal dependencies and contextual information in audio sequences to improve the transcription quality.
                        </li>
                        <li className="pt-2">
                            <b>Text-to-speech:</b> Systems such as <a rel="noreferrer" target="_blank" href="https://github.com/jaywalnut310/vits">VITS</a> or Suno's <a rel="noreferrer" target="_blank" href="https://github.com/suno-ai/bark">Bark</a> generate natural-sounding speech from written text.
                            The transformers in these models  use self-attention mechanisms to capture complex linguistic patterns and dependencies in text, enabling the generation of more human-like and expressive speech.
                        </li>
                        <li className="pt-2">
                            <b>Text-to-image:</b> OpenAi's <a rel="noreferrer" target="_blank" href="https://www.openai.com/blog/dall-e/">DALL-E</a> or Google's <a rel="noreferrer" target="_blank" href="https://imagen.research.google/">Imagen</a> were some of the first text-to-image models to generate highly realistic images from text descriptions.
                            They use transformers to understand textual description and generate corresponding images with relevant visual features and coherent spatial layouts
                        </li>
                        <li className="pt-2">
                            <b>Natural Language Processing:</b> And more specifically Large Language Models (LLMs), are the models that are currently benefiting the most from the transformer architecture.
                            This architecture allows them to effectively process and understand complex language patterns, generating coherent and contextually relevant text.
                            The transformer's attention mechanism enables LLMs to capture long-range dependencies, improving their performance in tasks such as translation, summarization, question answering, sentiment analysis, and many more.
                            Because these models are highly versatile and applicable in a wide range of real-world scenarios, many companies are investing in building their own LLMs.
                            Some of the most well-known examples include OpenAI's <a rel="noreferrer" target="_blank" href="https://openai.com/index/gpt-3-apps/">GPT-3</a> and <a rel="noreferrer" target="_blank" href="https://openai.com/index/gpt-4-research/">GPT-4</a>, Meta's <a rel="noreferrer" target="_blank" href="https://llama.meta.com/">Llama</a>, Anthropic's <a rel="noreferrer" target="_blank" href="https://www.anthropic.com/news/claude-3-family">Claude</a>, Google's <a rel="noreferrer" target="_blank" href="https://blog.google/technology/ai/google-gemini-ai/">Gemini</a> and Mistral AI's <a rel="noreferrer" target="_blank" href="https://mistral.ai/fr/news/mixtral-of-experts/">Mixtral</a>.
                        </li>
                    </ul>
                    More generally, the transformer architecture is a powerful building block that can be used to process <u>any sequential data with long-range dependencies</u>, such as text, time series or protein structure.
                    Because they are so ubiquitous, it is important as a data scientist to understand the principles behind transformers.

                    <br/>
                    <br/>
                    <div style={{color: 'red'}}>Below is still a work in progress...</div>


                    <h3 className="py-4">2. Input</h3>

                    Embeddings, Word2Vec for text, DINO for images, ...
                    <br/>
                    <br/>
                    Before diving into the actual mechanisms of transformers, it is important to understand how the data

                    <h3 className="py-4">3. Transformer Architecture</h3>

                    ToDo

                    <center>
                        <img
                            style={{width: "100%", height: "auto", maxWidth: "400px"}}
                            alt="Attention architecture"
                            title="Attention architecture"
                            src="/assets/blog/understanding_transformers/attention_architecture.png"
                        />
                    </center>

                    <h3 className="py-4">?. Prompts and LLMs</h3>

                    How to build chat bots? i.e. the model is trained by feeding it questions and answers: "Q: blabla. A: blabla". During inference, it takes the question as an input and tries to complete the rest: "Q: blabla. A: ...".
                    <br/>
                    <br/>
                    Inference parameters: Temperature, top-k top-p, ...

                    <h3 className="py-4">Resources</h3>
                    <ul>
                        <li>
                            Jay Alammar's blog post <a rel="noreferrer" target="_blank" href="https://jalammar.github.io/illustrated-transformer/">The Illustrated Transformer</a>
                        </li>
                        <li>
                            3Blue1Brown's video <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=wjZofJX0v4M">But what is a GPT?</a>
                        </li>
                    </ul>
                </div>
            </Row>

            <Row style={{flex: 0, display: "flex"}}>
                <DiscussionEmbed
                    shortname='colintr-fr'
                    config={
                        {
                            url: window.location.href,
                            identifier: "understanding_transformers",
                            title: "Understanding Transformers",
                            language: 'en'
                        }
                    }
                />
            </Row>
        </Container>
    );
};

export default UnderstandingTransformers;