Your clone should have the following features:

a landing view with a link to
an "index" view of open issues for the repo
a "show" view to display the details for individual issues
Your app will use React Router to navigate between different views.

Your app will be styled to look somewhat like Github

Strive to write Components that you can reuse in multiple places in your app



TODO: 

Create routes for the landing page, index of issues, show page ---DONE
Call github api and request open issues
Show single issue

Format look - initial pass

reduce from 100 to 20 open issues

        <nav>
          <Link to='/'> Landing</Link>{' | '}
          <Link to='/index'> Index</Link>{' | '}
        </nav>