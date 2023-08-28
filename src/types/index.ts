export interface IJob {
    job_title: string
}


export interface IJobsSclice {
    jobs: Array<IJob>
    loading: boolean
    error: boolean
    errorMessage: string | undefined
}

export interface IQuestion {
    question: string
    result: string
}

export interface IQuestionData {
    count: number
    next: string
    previous: string
    results: Array<IQuestion>
}

