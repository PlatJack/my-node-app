pipeline {
    agent any
    environment {
        GROOVY_HOME = tool name: 'Groovy-2.4.9', type: 'hudson.plugins.groovy.GroovyInstallation'
    }
    tools {
        jenkins.plugins.nodejs.tools.NodeJSInstallation '18.14.0'
        nodejs 'NodeJS'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/PlatJack/my-node-app.git',
                branch: 'master'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build with Maven') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh 'mvn test -Dtest=YourSeleniumTestClass'
            }
        }
    }
    post {
        success {
            echo 'Build and tests were successful!'
        }
        failure {
            echo 'Build or tests failed!'
        }
        always {
            echo 'Cleaning up...'
        }
    }
}