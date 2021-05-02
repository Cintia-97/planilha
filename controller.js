var itens = []

function addTask() {
    var taskLabel = document.getElementById("Task-input").value
        if (taskLabel != "") {
            itens.push(taskLabel)
        
            var html = ""
            for (var elemento of itens){
                html += `<li><input type="checkbox">${elemento}</li>`
                //document.getElementById("list").innerHTML += `<li>${taskLabel}</li>`
                document.getElementById("list").innerHTML = html
                console.log (itens)
            }
        }
} 

function ExitTask() {
    var Exit = itens.pop()
    console.log(Exit)
        var html = ""
            for (var elemento of itens){
                html += `<li><input type="checkbox">${elemento}</li>`
                //document.getElementById("list").innerHTML += `<li>${taskLabel}</li>`
                document.getElementById("list").innerHTML = html
                console.log (itens)
            }
}
