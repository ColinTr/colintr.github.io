import React from "react";
import {DiscussionEmbed} from "disqus-react";
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import BlogLinkElement from "../BlogLinkElement";

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const UnderstandingTransformers = () => {
    const page_title = "Understanding transformers and attention"
    const path = useLocation().pathname

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh", textAlign: "justify"}}>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <BlogLinkElement path={path} page_title={page_title}/>

                    <Row className="py-3">
                        <Col className="col-auto" style={{ flexGrow: 1 }}>
                            <h1 id="page_title">{page_title}</h1>
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
                    But before starting, let's define some important vocabulary:
                    <br/>
                    - The <u>attention function</u> is the core building block of the transformer architecture.
                    <br/>
                    - The <u>transformer architecture</u>, introduced in the 2017 paper "<a rel="noreferrer" target="_blank" href="https://arxiv.org/abs/1706.03762">Attention is All You Need</a>", is built entirely around the attention mechanism.
                    It consists of an encoder and a decoder, both of which use self-attention and multi-head attention mechanisms to process input and output sequences.

                    <h3 className="pt-4">2. The attention function</h3>

                    Knowing the inner workings of the attention function is not required to understand the transformer architecture, but it will certainly make the process easier.
                    Now, let us break down the details of how it works.
                    <br/>
                    <br/>
                    We will illustrate with the sentence "<i>Attention is crucial, it must be understood.</i>"
                    <br/>
                    Putting its words trough a <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Word_embedding">word embedding</a> function transforms them into numerical vectors that we can process.

                    <center className="py-2">
                        <img
                            style={{width: "100%", height: "auto", maxWidth: "570px"}}
                            alt="Attention architecture"
                            title="Attention architecture"
                            src="/assets/blog/understanding_transformers/attention1.png"
                        />
                        <br/>
                        <i>Each word is now a vector, which we represent with these simple boxes.</i>
                    </center>

                    We will see later that the transformer architecture uses multiple attention <i>heads</i>.
                    For the time being, let's focus on a single head.
                    In the "Attention is all you need" paper, the Scaled Dot-Product Attention is represented by this figure:

                    <center className="py-2">
                        <img
                            style={{width: "100%", height: "auto", maxWidth: "140px"}}
                            alt="Attention architecture"
                            title="Attention architecture"
                            src="/assets/blog/understanding_transformers/scaled_dot-product_attention.png"
                        />
                    </center>

                    The input consists of <Latex>$Q$, $K$ and $V$</Latex>, the query, key and value matrices.
                    They are the result of the product between the input vectors <Latex>{'$\\vec{e_1}, \\vec{e_2}, \\dots \\vec{e_7}$'}</Latex> and the query, key and value <b>weight matrices</b> <Latex>$W_Q$, $W_K$ and $W_V$</Latex>:

                    <center>
                        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                            <img
                                style={{width: "100%", height: "auto", maxWidth: "400px"}}
                                className="py-2"
                                alt="Attention architecture"
                                title="Attention architecture"
                                src="/assets/blog/understanding_transformers/attention2.png"
                            />
                            <img
                                style={{width: "100%", height: "auto", maxWidth: "400px"}}
                                className="py-2"
                                alt="Attention architecture"
                                title="Attention architecture"
                                src="/assets/blog/understanding_transformers/attention3.png"
                            />
                        </div>
                        <i>Computing the first query and key vectors</i>
                    </center>

                    This process is repeated for each word in the sentence, forming the query <b>vectors</b> <Latex>{'$\\vec{q_1}, \\vec{q_2}, \\dots \\vec{q_7}$'}</Latex> and  the key <b>vectors</b> <Latex>{'$\\vec{k_1}, \\vec{k_2}, \\dots \\vec{k_7}$'}</Latex>.
                    <br/>
                    They can then be concatenated to form the query <b>matrix</b> and the key <b>matrix</b>:
                    <center className="py-2">
                        <Latex>{'$Q = \\begin{bmatrix} \\vert & & \\vert \\\\ q_1 & \\dots & q_7 \\\\ \\vert & & \\vert \\end{bmatrix}$'}</Latex> and <Latex>{'$K = \\begin{bmatrix} \\vert & & \\vert \\\\ k_1 & \\dots & k_7 \\\\ \\vert & & \\vert \\end{bmatrix}$'}</Latex>
                    </center>












                    <br/>
                    <br/>
                    <div style={{color: 'red'}}>Below is still a work in progress...</div>

                    <h3 className="pt-4">?. Input</h3>

                    Embeddings, Word2Vec for text, DINO for images, ...
                    <br/>
                    <br/>
                    Before diving into the actual mechanisms of transformers, it is important to understand how the data

                    <h3 className="pt-4">?. Transformer Architecture</h3>

                    ToDo

                    <center>
                        <img
                            style={{width: "100%", height: "auto", maxWidth: "400px"}}
                            alt="Attention architecture"
                            title="Attention architecture"
                            src="/assets/blog/understanding_transformers/attention_architecture.png"
                        />
                    </center>

                    <h3 className="pt-4">?. Prompts and LLMs</h3>

                    How to build chat bots? i.e. the model is trained by feeding it questions and answers: "Q: blabla. A: blabla". During inference, it takes the question as an input and tries to complete the rest: "Q: blabla. A: ...".
                    <br/>
                    <br/>
                    Inference parameters: Temperature, top-k top-p, ...

                    <h3 className="pt-4">Resources</h3>
                    <ul>
                        <li>
                            Jay Alammar's blog post <a rel="noreferrer" target="_blank" href="https://jalammar.github.io/illustrated-transformer/">The Illustrated Transformer</a>
                        </li>
                        <li>
                            3Blue1Brown's <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=wjZofJX0v4M">But what is a GPT?</a> and <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=eMlx5fFNoYc">Attention in transformers</a> videos
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
                            identifier: path,
                            title: page_title,
                            language: 'en'
                        }
                    }
                />
            </Row>
        </Container>
    );
};

export default UnderstandingTransformers;