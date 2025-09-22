# TODO – Job Finder Agent (LangGraph + Real-Time Job API)

## Overview

We are building an AI-powered **Job Finder Agent** that:

* Fetches **latest job postings** (within 24 hours).
* Helps users filter and rank jobs based on preferences.
* Provides **direct job links** with summaries.
* Supports **auto-apply** by storing user data (resume, details) and submitting applications automatically after user confirmation.

## Phase 1: Setup

* [ ] **Set up development environment**

  * [ ] Python environment for backend
  * [ ] Node.js + Next.js for frontend
  * [ ] Docker for containerization

* [ ] **Install dependencies**

  * [ ] LangGraph (`pip install langgraph`)
  * [ ] FastAPI (`pip install fastapi uvicorn`)
  * [ ] Pinecone (`pip install pinecone-client`)
  * [ ] MongoDB driver (`pip install pymongo`)
  * [ ] OpenAI (`pip install openai`)
  * [ ] Axios or Fetch API for Next.js

* [ ] **Get API keys** for job data:

  * [ ] Adzuna API
  * [ ] Jooble API
  * [ ] RemoteOK API

* [ ] **Set up storage**:

  * [ ] MongoDB → for storing:

    * User profiles
    * Preferences (role, location, filters)
    * Search history
    * Auto-apply data (resume, cover letter, credentials)

* [ ] **Environment variables**

  * [ ] `.env` for API keys and database credentials
  * [ ] Secure secrets management (AWS Secrets Manager or similar)

## Phase 2: LangGraph Workflow

| Node Name              | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| Input Node             | Capture user query from chatbot                                       |
| Intent Extraction Node | Use GPT-4o mini to extract job filters (role, location, salary, etc.) |
| Fetch Node             | Call job APIs (Adzuna, Jooble, RemoteOK)                              |
| Freshness Filter Node  | Keep only jobs posted in the last 24 hours                            |
| Semantic Matching Node | Rank jobs by relevance using OpenAI embeddings + Pinecone             |
| Output Node            | Return formatted job listings with links                              |

**Additional future nodes (for auto-apply):**

| Node Name               | Purpose                                           |
| ----------------------- | ------------------------------------------------- |
| Profile Validation Node | Validate user's saved resume and info             |
| Auto-Fill Node          | Auto-fill job application forms using stored data |
| Submission Node         | Submit final application after user confirmation  |

## Phase 3: Backend (FastAPI + LangGraph)

* [ ] Create FastAPI backend for handling all requests.
* [ ] Implement each LangGraph node as a separate function/module.
* [ ] Integrate job APIs:

  * [ ] Adzuna API for general jobs
  * [ ] Jooble API for multiple regions
  * [ ] RemoteOK API for remote jobs
* [ ] Add **data freshness filter** to only return jobs posted within the last 24 hours.
* [ ] Implement **Pinecone-based semantic matching**:

  * [ ] Store job descriptions as embeddings
  * [ ] Match against user preferences
* [ ] MongoDB integration for:

  * [ ] Storing user profiles
  * [ ] Search history
  * [ ] Auto-apply data
* [ ] Add **robust error handling** for failed API calls or timeouts.
* [ ] Add API rate-limiting to avoid hitting API limits.

## Phase 4: Frontend (Next.js)

* [ ] Set up Next.js project.
* [ ] Create clean **chatbot interface** for user interaction.
* [ ] Build job result display with cards showing:

  * Role
  * Company
  * Location
  * Salary
  * "View Job" link
* [ ] Implement filters:

  * [ ] Remote only
  * [ ] Salary range
  * [ ] Experience level
* [ ] Profile management page for users to:

  * [ ] Upload resume
  * [ ] Fill in personal info
  * [ ] Save preferences
* [ ] Notifications panel for:

  * [ ] Latest matching job postings
  * [ ] Pending auto-apply confirmations

## Phase 5: Deployment

* [ ] Dockerize both frontend and backend.
* [ ] Deploy to AWS using ECS or EKS.
* [ ] Use AWS CloudWatch for logging and monitoring.
* [ ] Set up API Gateway for secure routing.
* [ ] Implement auto-scaling policies for high traffic.
* [ ] Enable HTTPS via AWS Certificate Manager.
* [ ] Apply strict API rate limiting.

## Phase 6: Future Enhancements

* [ ] Multi-language support for global users.
* [ ] Integration with LinkedIn Jobs API and Indeed API once approved.
* [ ] Smart notifications via email, Slack, or SMS.
* [ ] Integration with resume parsing and scoring models.
* [ ] Add job recommendation system based on past searches and applications.

## Phase 7: Future Auto-Apply System

The **auto-apply feature** will let the system **fill out job application forms automatically** using saved user data. Before submission, the user will **review and confirm**.

### Future Steps for Auto-Apply

* [ ] **Data Collection & Security**

  * [ ] Securely store:

    * Resume (PDF/Docx)
    * Cover letter templates
    * Personal details (name, email, phone, LinkedIn, etc.)
  * [ ] Encrypt sensitive data in MongoDB.
  * [ ] Implement authentication & user roles.

* [ ] **Form Mapping**

  * [ ] Identify fields required by each job portal (role, resume, etc.).
  * [ ] Create a standardized mapping structure.

* [ ] **Auto-Fill Engine**

  * [ ] Use APIs where available to auto-fill data.
  * [ ] If APIs are unavailable, **use Playwright** for automated form filling (only when necessary).

* [ ] **Review & Confirmation Flow**

  * [ ] Before submitting, generate a preview:

    * Job details
    * Filled-in application data
  * [ ] User must confirm:

    * **"Yes, submit application"** or **"Cancel"**

* [ ] **Submission Engine**

  * [ ] Automate submission via:

    * Job portal API (preferred)
    * Headless browser automation (fallback)
  * [ ] Log submission status and errors.

* [ ] **Activity Dashboard**

  * [ ] Show all submitted applications with timestamps.
  * [ ] Allow users to track progress and statuses.

## Architecture with Auto-Apply

```
User (Next.js Frontend)
      |
      v
FastAPI Backend (LangGraph)
      |
      |-- Intent Extraction (LLM)
      |
      |-- Fetch Jobs (Adzuna, Jooble, RemoteOK APIs)
      |
      |-- Filter Jobs (Freshness Check - 24hr)
      |
      |-- Semantic Match (OpenAI + Pinecone)
      |
      |-- Auto-Fill Engine (Future)
      |
      |-- Submit Application (API or Playwright)
      |
      v
MongoDB (User Data + Search History + Application Records)
```

## Tools Summary

| Layer                    | Recommended Tool            |
| ------------------------ | --------------------------- |
| Orchestration            | LangGraph                   |
| LLM                      | GPT-4o mini                 |
| Frontend                 | Next.js                     |
| Backend                  | FastAPI                     |
| Vector DB                | Pinecone                    |
| Storage                  | MongoDB                     |
| Job APIs                 | Adzuna, Jooble, RemoteOK    |
| Form Automation (Future) | Playwright (only fallback)  |
| Deployment               | Docker + AWS ECS/EKS        |
| Monitoring               | CloudWatch                  |
| Security                 | AWS Secrets Manager + HTTPS |

## Summary

* **APIs First:** Use Adzuna, Jooble, RemoteOK for real-time data → avoid scraping unless absolutely required.
* **LangGraph** handles the complex, multi-step workflow from query → job fetching → ranking → output.
* **Frontend with Next.js** for a modern, scalable UI.
* **MongoDB** stores user data securely.
* **Auto-apply system** will be phased in later with encrypted storage and final review before submission.
* **Playwright** only used for fallback automation where APIs are unavailable.

This structure allows you to **launch quickly** with basic job sear
