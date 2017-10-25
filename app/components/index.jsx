import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return <h2>Главная</h2>;
    }
}
class About extends React.Component {
    render() {
        return <h2>О сайте</h2>;
    }
}
class NotFound extends React.Component {
    render() {
        return <h2>Ресурс не найден</h2>;
    }
}
class Phone extends React.Component {
    render() {
        return <h3>Смартфоны</h3>;
    }
}
class Tablet extends React.Component {
    render() {
        return <h3>Планшеты</h3>;
    }
}
class Products extends React.Component {
    render() {
        return <div>
            <h2>Товары</h2>
            <Switch>
                <Route path="/products/phones" component={Phone} />
                <Route path="/products/tablets" component={Tablet} />
            </Switch>
        </div>;
    }
}
class MainPlugin extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route component={NotFound} />
            </Switch>
        </Router>;
    }
}

module.exports = MainPlugin;