import { FormEvent, useEffect, useState } from 'react'
import './App.css'

type FormData = {
  nome: string
  email: string
  curso: string
  interesse: string
}

const STORAGE_KEY = 'tigepps_onboarding_dados'

const initialForm: FormData = {
  nome: '',
  email: '',
  curso: '',
  interesse: '',
}

function App() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [dadosSalvos, setDadosSalvos] = useState<FormData | null>(null)
  const [erro, setErro] = useState('')
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    const dados = localStorage.getItem(STORAGE_KEY)

    if (!dados) return

    try {
      const dadosConvertidos: FormData = JSON.parse(dados)
      setDadosSalvos(dadosConvertidos)
      setForm(dadosConvertidos)
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  function atualizarCampo(
    campo: keyof FormData,
    valor: string,
  ) {
    setForm((anterior) => ({
      ...anterior,
      [campo]: valor,
    }))

    setErro('')
    setMensagem('')
  }

  function emailValido(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      !form.nome.trim() ||
      !form.email.trim() ||
      !form.curso.trim() ||
      !form.interesse.trim()
    ) {
      setErro('Preencha todos os campos obrigatórios.')
      setMensagem('')
      return
    }

    if (!emailValido(form.email)) {
      setErro('Informe um e-mail válido.')
      setMensagem('')
      return
    }

    const dadosParaSalvar: FormData = {
      nome: form.nome.trim(),
      email: form.email.trim(),
      curso: form.curso.trim(),
      interesse: form.interesse.trim(),
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(dadosParaSalvar),
    )

    setDadosSalvos(dadosParaSalvar)
    setErro('')
    setMensagem('Dados salvos com sucesso!')
  }

  function limparDados() {
    localStorage.removeItem(STORAGE_KEY)
    setForm(initialForm)
    setDadosSalvos(null)
    setErro('')
    setMensagem('Dados removidos.')
  }

  return (
    <main className="pagina">
      <section className="container">
        <header className="cabecalho">
          <a
            href="https://geppsufs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link"
          >
            <img
              src="./public/logo-banner.jpg"
              alt="Logo TIGEPPS"
              className="logo"
            />
          </a>

          <div>
            <p className="instituicao">Universidade Federal de Sergipe</p>
            <h1>Onboarding 2026.2</h1>
            <p className="subtitulo">
              Familiarização prática com React, TypeScript, Vite e localStorage
            </p>
          </div>
        </header>

        <div className="grid">
          <section className="card">
            <h2>Formulário de apresentação</h2>
            <p className="descricao">
              Preencha seus dados. As informações serão armazenadas localmente
              no navegador.
            </p>

            <form onSubmit={enviarFormulario} noValidate>
              <div className="campo">
                <label htmlFor="nome">Nome *</label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  value={form.nome}
                  onChange={(event) =>
                    atualizarCampo('nome', event.target.value)
                  }
                />
              </div>

              <div className="campo">
                <label htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="nome@exemplo.com"
                  value={form.email}
                  onChange={(event) =>
                    atualizarCampo('email', event.target.value)
                  }
                />
              </div>

              <div className="campo">
                <label htmlFor="curso">Curso *</label>
                <input
                  id="curso"
                  type="text"
                  placeholder="Ex.: Ciência da Computação"
                  value={form.curso}
                  onChange={(event) =>
                    atualizarCampo('curso', event.target.value)
                  }
                />
              </div>

              <div className="campo">
                <label htmlFor="interesse">
                  Área de interesse no GEPPS *
                </label>
                <select
                  id="interesse"
                  value={form.interesse}
                  onChange={(event) =>
                    atualizarCampo('interesse', event.target.value)
                  }
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Desenvolvimento Web">
                    Desenvolvimento Web
                  </option>
                  <option value="PWA">PWA</option>
                  <option value="Dados">Dados</option>
                  <option value="Pesquisa">Pesquisa</option>
                  <option value="Outra">Outra</option>
                </select>
              </div>

              {erro && <p className="alerta erro">{erro}</p>}
              {mensagem && (
                <p className="alerta sucesso">{mensagem}</p>
              )}

              <div className="acoes">
                <button type="submit">Salvar dados</button>

                <button
                  type="button"
                  className="secundario"
                  onClick={limparDados}
                >
                  Limpar
                </button>
              </div>
            </form>
          </section>

          <section className="card resultado">
            <h2>Dados enviados</h2>

            {dadosSalvos ? (
              <div className="dados">
                <div>
                  <span>Nome</span>
                  <strong>{dadosSalvos.nome}</strong>
                </div>

                <div>
                  <span>E-mail</span>
                  <strong>{dadosSalvos.email}</strong>
                </div>

                <div>
                  <span>Curso</span>
                  <strong>{dadosSalvos.curso}</strong>
                </div>

                <div>
                  <span>Área de interesse</span>
                  <strong>{dadosSalvos.interesse}</strong>
                </div>

                <p className="persistencia">
                  Estes dados permanecem disponíveis mesmo após atualizar a
                  página, pois são recuperados do localStorage.
                </p>
              </div>
            ) : (
              <div className="vazio">
                <p>Nenhum dado foi salvo ainda.</p>
                <small>
                  Preencha o formulário ao lado e clique em “Salvar dados”.
                </small>
              </div>
            )}
          </section>
        </div>

        <footer>
          <p>GEPPS • Tecnologia da Informação • UFS</p>
        </footer>
      </section>
    </main>
  )
}

export default App
