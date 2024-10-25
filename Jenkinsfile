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
                bat 'npm install'  // On Windows, use 'bat' instead of 'sh'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
    }
}
