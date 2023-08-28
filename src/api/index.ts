import instance from "./instance"

const api = {
    getAllJobs() {
        return instance.get("api/v1/jobs/").then(res => res)
    },
    getHrJobs() {
        return instance.get("api/v1/hr-questions/").then(res => res)
    },
    getTechJobs(job_id: number | string, grade_id: number | string) {
        return instance.get(`/api/v1/tech-questions/${job_id}/${grade_id}/`).then(res => res)
    },
    getGrades() {
        return instance.get("api/v1/grades/").then(res => res)
    }
}


export default api