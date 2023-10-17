//元素
const info = document.querySelector('.info')
const text = document.querySelector('#text')
const ulWait = document.querySelector('.wait')
const waitArr = JSON.parse(localStorage.getItem('data')) || []

// 頁面刷新
//打印
function render() {
    // li.innerHTML = ''
    const newArr = waitArr.map(function (ele, index) {
        return `
        <li>
        <input type="checkbox">
        <p class="content" data-id=${index - 1}>${ele}</p>
        <span class="bi-x-lg del" id="del" data-id=${index}></span>
        </li>`})
    ulWait.innerHTML = newArr.join('')
    // console.log(ulWait);
    //本地存儲
    localStorage.setItem('data', JSON.stringify(waitArr))

}
render()
//新增
info.addEventListener('submit', function (e) {
    //防止表單提交後，頁面刷新的默認行為
    e.preventDefault()
    //非空判斷
    if (text.value === '') {
        return alert('請輸入代辦內容，再進行提交')
    }
    //將用戶輸入的內容，加到陣列
    waitArr.push(text.value)
    // console.log(waitArr);
    //輸入完畢資料，自動刪除輸入框內容
    this.reset()
    //打印
    render()




})


//刪除
ulWait.addEventListener('click', function (e) {
    if (e.target.tagName === "SPAN") {
        waitArr.splice(e.target.dataset.id, 1)
        // 刪除完數據後，重新打印
        render()
    }
})

//勾選時，增加刪除線
ulWait.addEventListener('click', function (e) {
    if (e.target.tagName === 'INPUT') {
        e.target.nextElementSibling.classList.toggle('todo_done')
    }

})
