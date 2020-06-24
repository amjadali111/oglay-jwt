import Axios from 'axios';

// when 'default' keyword is used then import without curly braces in the calling class or function

export default function add(notification) {
  return () => Axios.post('/api/notifications', notification);
}
