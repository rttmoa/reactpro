import http from './http';

// 获取指定状态的任务
const getTaskList = (state = 0) => {
    return http.get('/getTaskList', {
        params: {
            state
        }
    });
};

// 新增任务
const addTask = (task, time) => {
    return http.post('/addTask', {
        task,
        time
    });
};

// 删除任务
const removeTask = (id) => {
    return http.get('/removeTask', {
        params: {
            id
        }
    });
};

// 把任务设置为完成
const completeTask = (id) => {
    return http.get('/completeTask', {
        params: {
            id
        }
    });
};

const API = {
    getTaskList,
    addTask,
    removeTask,
    completeTask
};
export default API;