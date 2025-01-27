import React from 'react'
import { Button, Grid } from "@material-ui/core"

import qg from "./qg1.jpeg"
import doc from "./doc.jpeg"
import research_paper from "../landing/images/BE_Research_Paper.pdf"

function Dashboard() {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1 style={{ color: "Lightgreen" }}>VIRTUAL ASSISTANCE USING QUESTION GENERATION AND ANSWERING</h1>
        <h2 style={{ textAlign: "left", color: "#c9caea" }}><u><i>INTRODUCTION</i></u></h2>
        <h4 style={{ textAlign: "left" }}>
        <p>Querying a given document or understanding a considerable record is always a tedious task. Whether it be a research paper based on any topic or a textbook in pdf format, most of the content is becoming online, which opens up a huge opportunity to use the online content for better understanding and easily accessible information. Assume we have a multi-page pdf, and we need to refer to it to answer a specific question, but we do not know which part of the pdf the answer exists, here we can leverage Deep Learning and N.L.P. techniques. Question answering is becoming an exciting part of the N.L.P. due to the advancements in deep learning models such as transformers, neural networks, Etc.; question answering is getting increasingly popular.</p>
        <p>Open-domain question answering (Q.A.) is a task in natural language understanding that can be immensely useful for the users to understand better and find answers to their queries as soon as possible.</p>
        <p>Another emerging topic in this field is question generation. Assume that a teacher wants to set a question paper for the students, he/she sets the questions from a particular domain, but for this, he/she needs to refer to the whole topic first and then frame questions out of it. Here, question generation using deep learning techniques can reduce the time spent reading the content and completes the task faster and efficiently.</p>
        <p>Question generation is a task that takes the context and an answer phase, then generates a question from these inputs. This field has become tremendously popular in the academic as well as industrial sectors.</p>
        <p>We aim to combine both Question answering and question generation techniques in one place, which would help the user easily upload the content they need for processing, and based on the models present in the system, it will give the respective output to the user. A user interface plays a vital role for the user. For easy accessibility of the system, the whole system is based on "WhatsApp" to be used through a chat-based system that is easy to understand and easy to use. We propose a system capable of interacting with the user via "WhatsApp" as a chat application and, based on the user's inputs, providing tasks such as question generation and question answering using the proposed models.</p>
        </h4>

        &nbsp;&nbsp;&nbsp; 

        <h2 style={{ textAlign: "left", color: "#c9caea" }}><u><i>RELATED WORK</i></u></h2>
        <h4 style={{ textAlign: "left" }}>
        <p>Development in the field of Automatic Question Answering Systems is excellent in recent years. Many approaches have been used to implement the following requirement. A. Agarwal[1] divides the whole system processing into three subprocesses, Entity Recognition using D.C.N. ( Dynamic Concept Network ), Question Analyzer, which filters relevant features using tokens, and Answer Retrieval, for extracting the answer based on the above two processes. Darshana [2], in his paper,  provided a Versatile global T-max pooling and DeepLSTM for quality answer prediction. They have also used Efficient D.F.M. to forecast amicable solutions, especially D.F.M. used for the ranking cause. Monisha Devi[3] provided a Closed Domain Answering System based on predefined knowledge domain resources. Here, the query is processed based on the keywords generated by the S.E.R.(System Entity Recognizer). Emanuele Damiano[4] also used Local Proximity Prioritizer for a high-density answer matching from the query and Keywords Overlapping Module for better answer selection. Marco Pota[5] proposed a closed domain Q.A. system based on fuzzy logic and uses various components like Named entity matching, Keywords Overlapping, Proximity with Gap, Proximity Distance, Highlighted Text to L.A.T., Multiple L.A.T. discourager for answer selection. Ajitkumar Meshram Pudge gave a factoid-based Question Answering System in his paper [7]. The system uses TF-IDF Vectorizer and Cosine Similarity Finder as tools for improving system accuracy. M. -Y. Day and Y. -L. Kuo also uses Deep Learning for Factoid based Question Answering System[14]. In his paper[9], Akshay Upadhyay proposes an L.S.T.M.-based model that classifies a question into an opinionated or  a polar category.The system also uses soft computing for identifying duplicate questions for faster processing and better accuracy. Sweta and Raghuwanshi used various NLP techniques for this in their paper[6].</p>
        <p>Like Question Answering, fields of Question Generating systems have significantly improved over the last few years. Yua Sun [10] papers propose a QuGan model based on Q.R.N.N. and Reinforcement Learning(R.L.) for a Tibetian Question generation. Q.R. is used as Generator to derive maximum probability text sequence and the degree of correctness of the generated data checked using L.S.T.M. The system uses Reinforcement Learning for faster sequence identifiers B.E.R.T. for system grammatical error reduction. Ying and Yao gave a B.E.R.T based Question Generating Model in their paper[11]. Animesh and Shantanu gave a Deep learning Model for Question Generation[8].</p>
        </h4>

        &nbsp;&nbsp;&nbsp; 

        <h2 style={{ textAlign: "left", color: "#c9caea" }}><u><i>DATASET DESCRIPTION</i></u></h2>
        <h4 style={{ textAlign: "left" }}>
        <p>Dataset used by our proposed system is SQuAD 2.0 Dataset. Stanford released it for Natural Language Processing tasks. SQuAD (Stanford Question Answering Dataset) is an open-source dataset used to train and test a model for generating and answering questions. The whole dataset consists of Wikipedia articles with crowdsourcing, where crowds were to raise questions on Wikipedia articles for which answers were also available in the same article.</p>
        <p>The dataset also includes more than fifty thousand unanswerable questions for a better model training process and answerable questions.</p>
        </h4>

        &nbsp;&nbsp;&nbsp; 

        <h2 style={{ textAlign: "left", color: "#c9caea" }}><u><i>OUTPUT IMAGES</i></u></h2>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} style={{ paddingTop: '40px' }}>
            <img src={ qg } width="200px" height="400px" alt="landing_image" />
            <h2>Fig.1. Question Generation</h2>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} style={{ paddingTop: '40px' }}>
            <img src={ doc } width="200px" height="400px" alt="landing_image" />
            <h2>Fig.2. First page of PDF Input</h2>
            </Grid>
        </Grid>

        &nbsp;&nbsp;&nbsp; 

        <h2 style={{ textAlign: "left", color: "#c9caea" }}><u><i>DOWNLOAD RESEARCH PAPER</i></u></h2>
        <h4 style={{ textAlign: "left" }}>
            &nbsp;&nbsp;&nbsp; 
            <Button variant="outlined" color="primary" href={ research_paper }>
              Research Paper
            </Button>
            </h4>
      </div>
    );
  }
  
  export default Dashboard;