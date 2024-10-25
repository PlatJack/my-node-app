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
        stage('Run Server for 1 Minute') {
            steps {
                script {
                    def server = bat(script: 'start /B npm start', returnStatus: true)
                    sleep(60)
                    bat 'taskkill /F /IM node.exe'
                }
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
    }
}