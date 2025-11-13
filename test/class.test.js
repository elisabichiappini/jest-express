//creo classe;
class User {
    nome = 'Elisa'
};

test('creo istanza classe', () => {
    const user = new User();
    expect(user).toBeInstanceOf(User);
});

test('ccontrollo se il nome è Elisa', () => {
    const user = new User();
    expect(user.nome).toBe('Elisa');
});

test('controlla che User sia un oggetto', () => {
    const user = new User();
    expect(typeof user).toBe('object');
}) 