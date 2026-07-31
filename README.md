# Venkat Chowdary Maridi — Portfolio

This repository contains the source code for my personal portfolio website and professional profile. The site is designed to reflect the same identity, experience, and project story shown in my resume and online presence.

## Profile

- Name: Venkat Chowdary Maridi
- Role: CS Engineer — AI Systems & Backend
- Location: Bangalore, India
- Email: venkatchowdarymaridi72@gmail.com
- Phone: +91 95505 23099
- GitHub: https://github.com/venkatchowdari
- LinkedIn: https://www.linkedin.com/in/venkat-chowdari-maridi-6b763a26a
- LeetCode: https://leetcode.com/venkatchowdari

## Professional Summary

Computer Science graduate specializing in AI engineering and backend development, with hands-on experience building retrieval-augmented generation (RAG) pipelines, LLM-powered applications, and production APIs.

I have built end-to-end systems such as a document Q&A pipeline with FastAPI, LangChain, ChromaDB, and Groq, and open-source tooling that reduces LLM token consumption for long documents. I am especially interested in turning AI ideas into dependable, containerized, production-style systems that prioritize performance, maintainability, and practical deployment.

## Technical Skills

### Languages
- Python
- Java
- JavaScript
- SQL
- C

### AI / ML
- LangChain
- Retrieval-Augmented Generation (RAG)
- LLM Integration
- Prompt Engineering
- ChromaDB
- Vector Embeddings
- Groq API
- OpenAI API
- LLaMA
- fastembed
- Ollama
- Natural Language Processing

### Backend & Frameworks
- FastAPI
- Spring Boot
- Flask
- REST APIs
- Node.js
- Next.js

### Frontend
- React
- Next.js
- Streamlit
- HTML
- CSS

### Infrastructure & DevOps
- Docker
- Docker Compose
- Celery
- Redis
- Git
- GitHub
- Linux

### Databases
- MySQL
- MongoDB
- ChromaDB

## Experience

### Generative AI Intern — CodeGnan IT Institute
Duration: Mar 2024 – Jul 2024

- Prototyped document Q&A and summarization tools using OpenAI and LLaMA APIs, improving contextual accuracy through iterative RAG pipeline design.
- Engineered prompt structures that increased retrieval precision and contextual relevance within the RAG pipeline.
- Deployed prototypes via Streamlit, accelerating internal testing and stakeholder review cycles.
- Reduced model inference latency by 15–20% through profiling and tuning of API call patterns.

## Featured Projects

### RAG Document Q&A System
Repository: https://github.com/venkatchowdari/rag-doc-qa

Stack: FastAPI · LangChain · ChromaDB · Groq (LLaMA 3.1) · fastembed · Next.js · Docker

- Architected an end-to-end retrieval-augmented generation pipeline, including document ingestion, chunking, embedding generation, and grounded query response.
- Integrated Groq-hosted LLaMA 3.1 for inference and fastembed for embeddings, balancing latency and retrieval accuracy.
- Containerized the full stack with Docker Compose for reproducible deployment.

### ContextCrunch
Repository: https://github.com/venkatchowdari/contextcrunch

Stack: FastAPI · Celery · Redis · Next.js · Docker · MIT License

- Built and open-sourced a self-hosted file-to-Markdown converter that reduces LLM input token consumption by 25–60% depending on file type.
- Designed a seven-step Markdown optimization pipeline with automated token-savings metrics using tiktoken.
- Implemented an asynchronous processing queue with Celery and Redis, with Flower-based task monitoring.

### EasyAI
Repository: https://github.com/venkatchowdari/EasyAI

Stack: Next.js · OpenAI · LangChain · Vercel

- Shipped an AI-powered prompt-validation platform that classifies and screens user prompts for safety and contextual clarity before generation.
- Scaled to 2,000+ users within the first week through Vercel serverless deployment.

### Hotel Booking System
Repository: https://github.com/venkatchowdari/Hotel-Management-System

Stack: Java · OOP · MySQL

- Designed a modular hotel management application for room inventory, bookings, and customer records.
- Integrated a MySQL persistence layer for reliable booking and customer storage.

## Education

Bachelor of Technology in Computer Science & Engineering
- Institution: NRI Institute of Technology
- Duration: Oct 2022 – Mar 2026
- GPA: 7.6 / 10
- Location: Bangalore, India

Relevant coursework:
- Data Structures & Algorithms
- Operating Systems
- Computer Networks
- Software Design
- DBMS

## Certifications

- Programming Foundations (LinkedIn Learning)
- Java 11 (LinkedIn Learning)
- Java Data Structures (NPTEL)

## Project Structure

This portfolio website is built with Next.js, TypeScript, and Tailwind CSS. Most of the site content is centralized in `data/site.ts`, so updates to profile, projects, skills, and experience can usually be made without editing component files directly.


## Design Notes

The portfolio theme is grounded in the actual subject matter of the work:

- A terminal-style boot sequence in the hero section
- A pipeline trace diagram showing the RAG document Q&A flow
- Shell-style section labels that reflect how the site content is organized

These design choices reinforce the backend and AI systems focus rather than presenting a generic portfolio aesthetic.
