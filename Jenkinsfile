pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/PlatJack/my-node-app.git', branch: 'master'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Run Server for 1 Minute') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    bat 'npm start'
                }
                bat 'taskkill /F /IM node.exe'
            }
        }
    }
}