const listMenu = [{
    id: 1,
    url: "trang_chu"
    ,
    name: "Trang chủ",
    parenID: null,
    children: [
        {
            id: 8,
            name: "Trang chủ child1",
            parenID: 1,
            children: [
                {
                    id: 10,
                    name: "Trang chủ child 2",
                    parenID: 8,
                    children: [],
                    url: "trang_chu_child2"
                },
                {
                    id: 11,
                    name: "Trang chủ child 3",
                    parenID: 8,
                    children: [],
                    url: "trang_chu_child3"
                }
            ]
            ,
            url: "trang_chu1"
        },
        {
            id: 6,
            name: "Trang chủ child 2",
            parenID: 1,
            children: [

                {
                    id: 12,
                    name: "Trang chủ child4",
                    parenID: 6,
                    children: [],
                    url: "trang_chu_child4"
                },
                {
                    id: 13,
                    name: "Trang chủ child 5",
                    parenID: 6,
                    children: [],
                    url: "trang_chu_child5"
                },
                {
                    id: 14,
                    name: "Trang chủ child 6",
                    parenID: 6,
                    children: [],
                    url: "trang_chu_child6"
                }
            ]
            ,
            url: "trang_chu2"
        },
        {
            id: 7,
            name: "Trang chủ child 3",
            parenID: 1,
            children: [],
            url: ""
        }
    ]
}, {
    id: 2,
    name: "Giới thiệu",
    parenID: null,
    children: [
        {
            id: 8,
            name: "Giới thiệu child 1",
            parenID: 1,
            children: [],
            url: ""
        },
        {
            id: 6,
            name: "Giới thiệu child 2",
            parenID: 1,
            children: [],
            url: ""
        },
        {
            id: 7,
            name: "Giới thiệu child 3",
            parenID: 1,
            children: [],
            url: ""
        }
    ]
}, {
    id: 3,
    name: "Liên hệ",
    parenID: null,
    children: [],
    url: ""
}, {
    id: 4,
    name: "Góp ý",
    parenID: null,
    children: [],
    url: ""
}, {
    id: 5,
    name: "Chính sách",
    parenID: null,
    children: [],
    url: ""
}]
let root = document.getElementById('root')
const renderUI = (element, parentUrl) => {
    parentUrl = parentUrl || ""
    let UI = element.reduce((initValue, item) => `${initValue + `<li id=${item.url}><a
    href="${parentUrl ? parentUrl + "/" +
            item.url + '.html' : '/' + item.url + '.html'}

     ">${item.name}</a>
    ${(item.children && item.children.length !== 0) ? renderUI(item.children, parentUrl + '/' + item.url) : ""}</li>`} `, "")
    return `<ul>${UI}</ul>`
}
window.onload = () => {
    let ui = renderUI(listMenu)
    setTimeout(() => {
        let pathName = window.location.pathname
        let tab = pathName.split("/")
        tab.splice(-1, 1, tab.at(-1).replace('.html', ""))
        tab.forEach(item => {
            if (item !== "") {
                let elementActive = document.getElementById(item)
                elementActive.setAttribute("class", "active")
            }
        })
    }, 0)
    root.innerHTML = ui
}
