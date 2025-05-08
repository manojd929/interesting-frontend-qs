class Notification {
    constructor(id, message) {
        this.id =  id
        this.message = message + '-' + id
    }
}

class NotificationService {
    constructor() {
        this.notifications = []
        this.allowedCount = 5
    }

    constructNotification (notification) {
        const element = document.createElement('div')
        element.classList.add('notification')
        element.innerText = notification.message
        element.setAttribute('id', 'notification' + notification.id)
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'X'
        deleteButton.setAttribute('id', notification.id)
        element.append(deleteButton)
        deleteButton.addEventListener('click', this.deleteNotification)
        element.style.width = '200px'
        element.style.height = '25px'
        element.style.border = '1px solid black'
        return element
    }

    addNotification (notification) {
        this.notifications.push(notification)
    }

    deleteNotification (event) {
        const element = document.getElementById('notification' + event.target.id)
        element.remove()
    }

    displayNotification (notification) {
        app.append(this.constructNotification(notification))
    }

    handleNotification() {
        for (let notification of this.notifications) {
            this.displayNotification(notification)
        }
    }
}

const app = document.getElementById('app')
const ns = new NotificationService()

for (let i = 1; i <= 15; i++) {
    ns.addNotification(new Notification(i, 'Notification'))
}

const paintPage = () => {
    ns.handleNotification()
}

paintPage()