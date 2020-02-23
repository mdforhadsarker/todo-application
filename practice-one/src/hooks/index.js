import { useState, useEffect } from 'react';

import { firebase } from '../firebase';

const collectedTasks = () => {

};
 
export const useTasks = selectedProject => {

    const [ tasks, setTasks] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
        .firebase()
        .collection('tasks')
        .where('userId', '==', '1512537');



        unsubscribe = selectedProject && !collectedTasks(selectedProject)
        ?(unsubscribe = unsubscribe.where('projectId', '==', selectedProject)):
        selectedProject==='TODAY'
        ?(unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
        ))
        :selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==',''))
        :unsubscribe;
    }, [selectedProject]);
}

