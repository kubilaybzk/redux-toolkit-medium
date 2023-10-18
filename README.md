# Redux Nedir?
Tek bir cümle ile açıklamak gerekirse , geliştirdiğimiz projelerde global olarak stateleri yönetmemizi ve bu statelere müdahale etmemizi sağlayan bir teknoloji. Global olarak yönetmek derken neyden kast ettiğimi bir örnek üzerinden açıklayayım öncelikle.Bildiğiniz gibi son dönemlerde uygulamalarda tema özellikleri söz konusu olmaya başladı örnek olarak twitter'ı ele alalım.


[![N|Solid](https://cdn-images-1.medium.com/max/800/1*YmOgwLFO_TJY5DXaOsFNkw.png)]()

React ile geliştirilen Twitter’ın genel olarak layout kısmını inceleyelim ve konumuza uygun olacak şekilde bir layout haritası oluşturup uygulamamızı componentlere bölelim. Dark yada white mode için classname içinde bir kontrol gerçekleştirdiğimizi ve ona göre classların aktif pasif olacak şekilde uygulamanın UI kısmının render edildiğini düşünelim.

Bu verdiğim örnek aslında pek tercih edilmeyen ve kullanılmayan bir yöntem günümüzde bahsettiğim tema güncelleme işlemleri için bir çok farklı yöntem bulunmakta fakat örnek olarak konunun en kolay izah edileceği örneğinde bu olduğunu düşünüyorum.

Şimdi gelelim asıl konumuza global olarak state yönetimi için neden redux-toolkit kullanmalıyım.

Redux Toolkit, Redux tabanlı uygulamalar geliştirmeyi daha kolay ve verimli hale getiren bir kütüphanedir. Redux, JavaScript uygulamalarında durum yönetimi için yaygın olarak kullanılan bir kütüphanedir. Ancak Redux, kullanımı bazen karmaşıklaşabilen çok fazla tekrarlayan kod gerektirebilir. Redux Toolkit, bu sorunları çözmek ve Redux’i daha kullanıcı dostu hale getirmek için tasarlanmıştır.

Redux Toolkit’in bazı temel özellikleri şunlardır:

Azaltılmış Boilerplate Kod: Redux Toolkit, tipik Redux uygulamalarında yazmanız gereken tekrarlayan kod miktarını azaltır. “createSlice” ve “createAsyncThunk” gibi yardımcı işlevlerle, reducer’larınızı, eylemlerinizi ve çok sayıda işlemi daha az kodla tanımlamanıza olanak tanır.
İçe Aktarmaların Kolaylığı: Redux Toolkit, başka dosyalardan Redux özelliklerini içe aktarmayı ve kullanmayı kolaylaştırır. Bu sayede kodunuz daha organize ve okunur hale gelir.
Özelleştirilebilirlik: Redux Toolkit, her bir özelliği özelleştirmenize ve karmaşık kullanım senaryolarını ele almanıza olanak tanır. Bu, büyük ölçekli uygulamalarda esneklik sağlar.
Asenkron İşlemleri Kolaylaştırma: “createAsyncThunk” ile Redux Toolkit, asenkron işlemleri yönetmeyi basitleştirir. API çağrıları ve diğer asenkron işlemler için otomatik olarak eylemler oluşturur ve hata işleme yetenekleri sunar.
Redux Toolkit’i tercih etmenin bazı avantajları şunlar olabilir:

Daha az kod yazma: Redux Toolkit, Redux’in sunduğu özellikleri daha az kodla kullanmanızı sağlar, böylece geliştirme süreci daha hızlı hale gelir.
Daha kolay bakım: Azaltılmış boilerplate kod, uygulamanızın bakımını daha kolay ve sürdürülebilir hale getirir.
Asenkron işlemleri yönetme kolaylığı: Redux Toolkit, asenkron işlemleri kolayca entegre etmenizi ve yönetmenizi sağlar.
Daha iyi organizasyon: Redux Toolkit, kodunuzu daha düzenli bir şekilde organize etmenize yardımcı olur.
Ancak Redux Toolkit’i tercih etmek, projenizin gereksinimlerine ve ekibinizin deneyimine bağlıdır. Küçük projelerde veya Redux’i daha derinlemesine anlamak istediğiniz durumlarda, doğrudan temel Redux kullanabilirsiniz. Redux Toolkit, özellikle büyük ölçekli projelerde ve daha hızlı geliştirme süreçleri gerektiren durumlarda büyük bir avantaj sağlayabilir.

NextJS ve Redux kullanarak bir proje geliştirelim.
İlk olarak bir NextJS uygulaması oluşturalım.

[![N|Solid](https://miro.medium.com/v2/resize:fit:640/format:webp/0*r9kFnmAIKt3aSZCL.jpg)]()

Gördüğünüz gibi sağ tarafta bir navigation menümüz orta alanda yukarıdan aşağıya doğru ; kullanıcı bilgileri içeren bir component onun altında bir tab bar mevcut. Sol tarafta ise tekrar yukarıdan aşağıya doğru takip önerileri ve gündem kısmı bulunmakta.

Şimdi burada navigation kısmının bir component, kullanıcı bilgilerinin olduğu alanı başka bir comp. tab bar kısmını başka bir component olarak düşünelim. Uygulamamızda temayı değiştiren butona tıkladığımız zaman parçalara ayırdığımız ve projemizde ayrı ayrı javascript yada typescript olarak geliştirilen bu componetlerin sahip olduğu css kodlarının o anki koşula göre değişmesi gerekiyor değil mi ?

Burada navigation menüsünde bulunan Tweet butonunun hemen altında başka bir buton olduğunu düşünelim, bu butona basınca uygulamamızda bulunan bir state üzerinde bir değişim gerçekleşecek ve biz bu sayede menümüzü dark yada white olarak değiştirecek şekilde bir geliştirme yaptığımızı düşünelim , butona bastık ve temamız dark ise white oldu (yada tam tersi).Şimdi bu değişimi yaptıktan hemen sonra bizim orta alanda bulunan kullanıcı sayfamızın temasına müdahale edebilmemiz için nasıl bir yöntem izlememiz gerekiyor ?

Hemen aklınıza props olarak göndermek geliyor değil mi ? Peki o zaman burada her bir component içinde props olarak bu tema state’i aktarılacak ise parent olan bir componente biz bu state değerini nasıl yollayacağız? State’i parent içinde tanımlarız o zaman dediğinizi duyar gibiyim peki parent içinde state tanımını gerçekleştirdik ve bunu child componentlere props olarak aktarırken ne kadar fazla maliyet ve ne kadar çok fazla karmaşa ortaya çıkacak düşüncesi bile insanın kafasını karıştıracak cinsten değil mi ? İşte bu ve buna benzer bir durumda uygulamızda global olarak bu tema değerini tutacağımız bir state olması gerekiyor ve bu state’e her bir component içinde erişerek gerekli işlemleri yapmamız gerekiyor.

## NextJS ve Redux kullanarak bir proje geliştirelim.

İlk olarak bir NextJS uygulaması oluşturalım.
```
npx create-next-app redux-toolkit-medium
```

Daha sonra projemize Redux Toolkit’i kuralım.

```
npm install @reduxjs/toolkit react-redux
```







[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
