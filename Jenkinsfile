pipeline {
    agent any

    environment {
        APP_NAME = 'intermediate-app'
        IMAGE_NAME = "intermediate-app:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/abishajoshi/jenkins-pipeline.git'
        }

        stage('Pull Node Docker Image') {
            steps {
                bat 'docker pull node:18'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'docker run --rm -v "%cd%:/app" -w /app node:18 npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'docker run --rm -v "%cd%:/app" -w /app node:18 npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Starting app container...'
                // Stop and remove previous container if exists
                bat 'docker rm -f %APP_NAME% || echo "No existing container."'
                // Run the new container
                bat 'docker run -d -p 3000:3000 --name %APP_NAME% %IMAGE_NAME%'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful.'
        }
        failure {
            echo '❌ Build failed. Check above logs for details.'
        }
    }
}
}
