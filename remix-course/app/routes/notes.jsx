import  homeStyles from '~/styles/home.css';

export default function NotesPage() {
    return (
        <main id="content">
            <h1>My Notes!</h1>
        </main>
    );
}

export function links() { 
    return [{ rel:'stylesheet', href: homeStyles }];
} 