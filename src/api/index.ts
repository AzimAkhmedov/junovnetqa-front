import instance from "./instance"

const api = {
    getAllJobs() {
        return instance.get("api/v1/jobs/").then(res => res)
    }
}


export default api