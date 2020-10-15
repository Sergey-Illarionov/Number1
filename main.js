function loadMoreHandler() {
    const url = loadMoreBtn.dataset.more

        const xhr = new XMLHttpRequest() 
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    loadMoreBtn.removeEventListener('click', loadMoreHandler)
                    loadMoreBtn.remove()
                    cardList.insertAdjacentHTML('beforeend', xhr.responseText)
                    initLoadBtn()
                } else {
                    alert("Ошибка" + xhr.statusText)
                }
            }
        }

}

// новый коменнтарий
